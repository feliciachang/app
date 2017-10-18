'use strict';

import _ from 'lodash';
import * as ActionTypes from '../actions/types';
import { unixNow } from '../lib/helpers';

const initialDataSetsState = { dataSets: null };

export function dataSets(state = initialDataSetsState, action) {
    let nextState = state;

    switch (action.type) {
    case ActionTypes.DEVICE_DATA_SETS_SUCCESS:
        return action.response.dataSets;
    default:
        return nextState;
    }
}

const initialDataSetState = null;

export function dataSet(state = initialDataSetState, action) {
    let nextState = state;

    switch (action.type) {
    case ActionTypes.DEVICE_DATA_SET_SUCCESS:
        return _.cloneDeep(action.response.dataSets.dataSets[0]);
    case ActionTypes.DEVICE_ERASE_DATA_SET_SUCCESS:
        nextState = _.cloneDeep(state);
        nextState.erased = true;
        return nextState;
    default:
        return nextState;
    }
}

const initialDownloadState = {
    active: false,
    progress: 0,
    pages: [],
};

export function download(state = initialDownloadState, action) {
    let nextState = state;

    switch (action.type) {
    case ActionTypes.DOWNLOAD_DATA_SET_START:
        return {
            active: true,
            progress: 0,
            pages: [],
        };
    case ActionTypes.DOWNLOAD_DATA_SET_DONE:
        return initialDownloadState;
    case ActionTypes.DEVICE_DOWNLOAD_DATA_SET_SUCCESS:
        return {
            active: true,
            progress: state.progress,
            pages: state.pages.concat([ action.response.dataSetData ])
        };
    case ActionTypes.DOWNLOAD_DATA_SET_PROGRESS:
        return {
            active: true,
            progress: action.progress,
            pages: state.pages
        };
    default:
        return nextState;
    }
}