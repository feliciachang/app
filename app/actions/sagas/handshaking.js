import Promise from "bluebird";
import { Alert } from "react-native";

import { put, take, takeLatest, takeEvery, select, all, race, call, fork, delay } from "redux-saga/effects";

import { QueryType } from "../../lib/protocol";
import { unixNow } from "../../lib/helpers";
import Config from "../../config";

import * as Types from "./../types";
import { navigateWelcome, navigateDeviceMenu } from "../navigation";
import { timerTick, timerDone } from "../timers";

import { deviceCall } from "./saga-utils";

export function* loseExpiredDevices(lastChecked) {
    const { devices } = yield select();

    for (let key in devices) {
        const entry = devices[key];
        const elapsed = (unixNow() - entry.time) * 1000;
        if (elapsed >= Config.deviceExpireInterval) {
            console.log("discoverDevices: Lost", key, "after", elapsed, entry);
            delete lastChecked[key];
            yield put({
                type: Types.FIND_DEVICE_LOST,
                address: entry.address
            });
        }
    }
}

export function* deviceStatus(device, lastChecked) {
    try {
        console.log("Handshake (Status)", device);

        const filesReply = yield call(deviceCall, {
            types: [Types.DEVICE_FILES_START, Types.DEVICE_FILES_SUCCESS, Types.DEVICE_FILES_FAIL],
            address: device.address,
            blocking: false,
            message: {
                type: QueryType.values.QUERY_FILES
            }
        });

        lastChecked.status(device.address.key);

        /*
        yield put({
            type: Types.FIND_DEVICE_SUCCESS,
            address: device.address
        });
        */
    } catch (err) {
        console.log("Handshake Error:", err.message);
    } finally {
        lastChecked.busy(device.address.key, false);
    }
}

export function* deviceHandshake(device, lastChecked) {
    try {
        console.log("Handshake", device);

        const handshakeReply = yield call(deviceCall, {
            types: [Types.DEVICE_HANDSHAKE_START, Types.DEVICE_HANDSHAKE_SUCCESS, Types.DEVICE_HANDSHAKE_FAIL],
            address: device.address,
            message: {
                type: QueryType.values.QUERY_CAPABILITIES,
                queryCapabilities: {
                    version: 1,
                    callerTime: unixNow()
                }
            }
        });

        const capabilities = handshakeReply.response.capabilities;

        yield put({
            type: Types.FIND_DEVICE_SUCCESS,
            address: device.address,
            capabilities: capabilities
        });

        if (Config.discoveryQueryFilesAndStatus) {
            const statusReply = yield call(deviceCall, {
                types: [Types.DEVICE_STATUS_START, Types.DEVICE_STATUS_SUCCESS, Types.DEVICE_STATUS_FAIL],
                address: device.address,
                message: {
                    type: QueryType.values.QUERY_STATUS,
                    queryCapabilities: {
                        version: 1,
                        callerTime: unixNow()
                    }
                }
            });

            const filesReply = yield call(deviceCall, {
                types: [Types.DEVICE_FILES_START, Types.DEVICE_FILES_SUCCESS, Types.DEVICE_FILES_FAIL],
                address: device.address,
                blocking: false,
                message: {
                    type: QueryType.values.QUERY_FILES
                }
            });

            const identityReply = yield call(deviceCall, {
                types: [Types.DEVICE_QUERY_IDENTITY_START, Types.DEVICE_QUERY_IDENTITY_SUCCESS, Types.DEVICE_QUERY_IDENTITY_FAIL],
                address: device.address,
                message: {
                    type: QueryType.values.QUERY_IDENTITY
                }
            });

            /*
            if (identityReply.response.identity.device == "") {
                const identityReply = yield call(deviceCall, {
                    types: [Types.DEVICE_CONFIGURE_IDENTITY_START, Types.DEVICE_CONFIGURE_IDENTITY_SUCCESS, Types.DEVICE_CONFIGURE_IDENTITY_FAIL],
                    address: device.address,
                    message: {
                        type: QueryType.values.QUERY_CONFIGURE_IDENTITY,
                        identity: {
                            device: "Jacob's FkNat #4",
                            stream: ""
                        }
                    }
                });
            }
            */
        }

        lastChecked.handshake(device.address.key);
    } catch (err) {
        console.log("Handshake Error:", err.message);
    } finally {
        lastChecked.busy(device.address.key, false);
    }
}

class LastChecked {
    constructor() {
        this.times = {};
    }

    get(key) {
        return (
            this.times[key] || {
                busy: false,
                time: 0,
                handshake: 0
            }
        );
    }

    busy(key, flag) {
        const entry = this.get(key);
        this.times[key] = { ...entry, ...{ busy: flag } };
    }

    handshake(key) {
        const entry = this.get(key);
        this.times[key] = { ...entry, ...{ busy: false, handshake: unixNow(), time: unixNow() } };
    }

    status(key) {
        const entry = this.get(key);
        this.times[key] = { ...entry, ...{ busy: false, time: unixNow() } };
    }
}

export function* discoverDevices() {
    const started = unixNow();
    const lastChecked = new LastChecked();

    while (true) {
        const { discovered, to } = yield race({
            discovered: take(Types.FIND_DEVICE_INFO),
            to: delay(Config.findDeviceInterval)
        });

        if (discovered && discovered.address.valid) {
            const key = discovered.address.key;
            const entry = lastChecked.get(key);
            if (!entry.busy) {
                const elapsedSinceCheck = (unixNow() - entry.time) * 1000;
                const elapsedSinceHandshake = (unixNow() - entry.handshake) * 1000;
                if (elapsedSinceHandshake >= Config.deviceHandshakeInterval) {
                    lastChecked.busy(key, true);
                    yield fork(deviceHandshake, discovered, lastChecked);
                } else if (elapsedSinceCheck >= Config.deviceQueryInterval) {
                    lastChecked.busy(key, true);
                    yield fork(deviceStatus, discovered, lastChecked);
                }
            }
        }

        if (unixNow() - started > 10) {
            yield loseExpiredDevices(lastChecked);
        }
    }
}
