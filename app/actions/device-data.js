import { CALL_DEVICE_API } from '../middleware/device-api';
import { QueryType } from '../lib/protocol';

import * as Types from './types';

export function queryFiles() {
    return (dispatch, getState) => {
        return dispatch({
            [CALL_DEVICE_API]: {
                types: [Types.DEVICE_FILES_START, Types.DEVICE_FILES_SUCCESS, Types.DEVICE_FILES_FAIL],
                address: getState().deviceStatus.connected,
                blocking: true,
                message: {
                    type: QueryType.values.QUERY_FILES
                }
            },
        });
    };
}

export function startDownloadFile(id) {
    return (dispatch, getState) => {
        return dispatch({
            type: Types.DOWNLOAD_FILE_START,
            id: id,
        });
    };
}

export function queryDataSets() {
    return (dispatch, getState) => {
        return dispatch({
            [CALL_DEVICE_API]: {
                types: [Types.DEVICE_DATA_SETS_START, Types.DEVICE_DATA_SETS_SUCCESS, Types.DEVICE_DATA_SETS_FAIL],
                address: getState().deviceStatus.connected,
                blocking: true,
                message: {
                    type: QueryType.values.QUERY_DATA_SETS,
                    queryDataSets: {}
                }
            },
        });
    };
}

export function queryDataSet(id) {
    return (dispatch, getState) => {
        return dispatch({
            [CALL_DEVICE_API]: {
                types: [Types.DEVICE_DATA_SET_START, Types.DEVICE_DATA_SET_SUCCESS, Types.DEVICE_DATA_SET_FAIL],
                address: getState().deviceStatus.connected,
                blocking: true,
                message: {
                    type: QueryType.values.QUERY_DATA_SET,
                    queryDataSet: {
                        id: id
                    }
                }
            },
        });
    };
}

export function eraseDataSet(id) {
    return (dispatch, getState) => {
        return dispatch({
            [CALL_DEVICE_API]: {
                types: [Types.DEVICE_ERASE_DATA_SET_START, Types.DEVICE_ERASE_DATA_SET_SUCCESS, Types.DEVICE_ERASE_DATA_SET_FAIL],
                address: getState().deviceStatus.connected,
                blocking: true,
                message: {
                    type: QueryType.values.QUERY_ERASE_DATA_SET,
                    eraseDataSet: {
                        id: id
                    }
                }
            },
        });
    };
}

export function startDownloadDataSet(id) {
    return (dispatch, getState) => {
        return dispatch({
            type: Types.DOWNLOAD_DATA_SET_START,
            id: id,
        });
    };
}
