import _ from 'lodash';

import { delay } from 'redux-saga';
import { put, take, takeLatest, takeEvery, select, all, race, call } from 'redux-saga/effects';

import { QueryType } from '../../lib/protocol';
import { Toasts } from '../../lib/toasts';

import * as Types from '../types';

import { queryCapabilities } from '../device-status';
import { queryDeviceMetadata, queryFiles, queryDownloadFile } from '../device-data';
import { findAllFiles } from '../local-files';

import { writeDeviceMetadata } from '../../lib/downloading';

import { deviceCall } from './saga-utils';

import Config from '../../config';

export function* deviceFilesCopier() {
    yield takeLatest(Types.COPY_DEVICE_FILES, function* watcher(action) {
        // Right now we just download log and data file.
        const downloadsPerDevice = [ {
            fileId: 4,
            chunked: 0,
            offset: 0,
            length: 0,
        }, {
            fileId: 1,
            chunked: 100000,
            offset: 0,
            length: 0,
        }];
        const devices = _(action.devices).filter(Config.deviceFilter).value();
        const numberOfFiles = _(devices).map(device => {
            return downloadsPerDevice.length;
        }).sum();

        try {
            let filesDownloaded = 0;

            yield put({
                type: Types.TASK_START,
                task: {
                    cancelable: true,
                    done: false
                }
            });

            for (const key in devices) {
                const device = devices[key];

                console.log("Device", device);

                const metadataAction = yield call(deviceCall, queryDeviceMetadata(device.address));
                const filesAction = yield call(deviceCall, queryFiles(device.address));

                yield call(writeDeviceMetadata, device.capabilities, metadataAction.response.fileData.data);

                for (let i = 0; i < downloadsPerDevice.length; ++i) {
                    const settings = downloadsPerDevice[i];
                    const file = _(filesAction.response.files.files).filter(f => f.id == settings.fileId).first();

                    console.log("File", settings, file);

                    const { downloaded, stop } = yield race({
                        downloaded: call(deviceCall, queryDownloadFile(device.capabilities, file, settings, device.address)),
                        stop: take(Types.OPERATION_CANCEL),
                    });

                    if (_.isObject(stop)) {
                        yield put({
                            type: Types.TASK_DONE,
                            task: {
                                done: true
                            }
                        });
                        return;
                    }

                    filesDownloaded++;

                    yield put({
                        type: Types.TASK_PROGRESS,
                        task: {
                            label: device.address.host,
                            progress: filesDownloaded / numberOfFiles,
                            cancelable: true,
                            done: false
                        }
                    });
                }
            }

            yield put({
                type: Types.TASK_DONE,
                task: {
                    done: true
                }
            });
        }
        catch (err) {
            console.log("Error", err);
            yield put({
                type: Types.DEVICE_CONNECTION_ERROR
            });
            yield put({
                type: Types.TASK_DONE,
                task: {
                    done: true
                }
            });
        }
    });
}
