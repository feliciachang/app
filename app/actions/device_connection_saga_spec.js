import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';
import { createMockTask, cloneableGenerator } from 'redux-saga/utils';
import { put, take, takeLatest, takeEvery, select, all, race, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import SagaTester from 'redux-saga-tester';

import * as Types from './types';
import { findDeviceInfo } from './discovery';
import { discoverDevice, deviceConnection } from './sagas';
import { useFakeDeviceConnection } from '../middleware/device-api';
import { QueryType, ReplyType } from '../lib/protocol';

describe('device connection saga', () => {
    let tester;
    let fakeDevice;

    beforeEach(() => {
        fakeDevice = useFakeDeviceConnection();
        tester = new SagaTester({ });
        tester.start(discoverDevice);
    });

    it('should timeout and fail after 60s', async () => {
        await tester.waitFor(Types.FIND_DEVICE_FAIL);
    });

    it('should timeout and fail when discovery returns invalid addresses', async () => {
        tester.dispatch(findDeviceInfo('127.0.0.1', 0));
        await tester.waitFor(Types.FIND_DEVICE_FAIL);
    });

    it('should query the device for capabilities and return success', async () => {
        fakeDevice.push({}, {
            type: ReplyType.values.REPLY_CAPABILITIES
        })
        tester.dispatch(findDeviceInfo('127.0.0.1', 12345));
        await tester.waitFor(Types.FIND_DEVICE_SUCCESS);
        expect(fakeDevice.queue).toHaveLength(0);
    });
});
