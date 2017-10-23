'use strict'

import { put, call } from 'redux-saga/effects'
import { invokeDeviceApi } from '../middleware/device-api';

export function* deviceCall(raw) {
    yield put({
        type: raw.types[0],
        message: raw.message
    })
    try {
        const returned = yield call(invokeDeviceApi, raw);
        yield put(returned);
        return returned;
    }
    catch (err) {
        console.log('GOT', err);
        console.log('PUT', err.action);
        yield put(err.action)
        throw err;
    }
}
