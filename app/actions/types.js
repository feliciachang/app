'use strict';

export const NAVIGATION_WELCOME = 'NAVIGATION_WELCOME';
export const NAVIGATION_ABOUT = 'NAVIGATION_ABOUT';
export const NAVIGATION_CONNECTING = 'NAVIGATION_CONNECTING';
export const NAVIGATION_DEVICE_MENU = 'NAVIGATION_DEVICE_MENU';
export const NAVIGATION_DATA_SETS = 'NAVIGATION_DATA_SETS';
export const NAVIGATION_SENSORS = 'NAVIGATION_SENSORS';
export const NAVIGATION_CONFIGURE = 'NAVIGATION_CONFIGURE';
export const NAVIGATION_NETWORK = 'NAVIGATION_NETWORK';
export const NAVIGATION_VIEW_DATA_SET = 'NAVIGATION_VIEW_DATA_SET';
export const NAVIGATION_LIVE_DATA = 'NAVIGATION_LIVE_DATA';
export const NAVIGATION_BACK = 'NAVIGATION_BACK';
export const NAVIGATION_NAME_OR_PATH = 'NAVIGATION_NAME_OR_PATH';

export function isNavigationAction(action) {
    return /NAVIGATION_(.+)/.test(action.type);
}

export const DEVICE_PING_START = 'DEVICE_PING_START';
export const DEVICE_PING_SUCCESS = 'DEVICE_PING_SUCCESS';
export const DEVICE_PING_FAIL = 'DEVICE_PING_FAIL';

export const DEVICE_STATUS_START = 'DEVICE_STATUS_START';
export const DEVICE_STATUS_SUCCESS = 'DEVICE_STATUS_SUCCESS';
export const DEVICE_STATUS_FAIL = 'DEVICE_STATUS_FAIL';

export const DEVICE_HANDSHAKE_START = 'DEVICE_HANDSHAKE_START';
export const DEVICE_HANDSHAKE_SUCCESS = 'DEVICE_HANDSHAKE_SUCCESS';
export const DEVICE_HANDSHAKE_FAIL = 'DEVICE_HANDSHAKE_FAIL';

export const DEVICE_CAPABILITIES_START = 'DEVICE_CAPABILITIES_START';
export const DEVICE_CAPABILITIES_SUCCESS = 'DEVICE_CAPABILITIES_SUCCESS';
export const DEVICE_CAPABILITIES_FAIL = 'DEVICE_CAPABILITIES_FAIL';

export const DEVICE_NETWORK_CONFIGURATION_START = 'DEVICE_NETWORK_CONFIGURATION_START';
export const DEVICE_NETWORK_CONFIGURATION_SUCCESS = 'DEVICE_NETWORK_CONFIGURATION_SUCCESS';
export const DEVICE_NETWORK_CONFIGURATION_FAIL = 'DEVICE_NETWORK_CONFIGURATION_FAIL';

export const DEVICE_SAVE_NETWORK_CONFIGURATION_START = 'DEVICE_SAVE_NETWORK_CONFIGURATION_START';
export const DEVICE_SAVE_NETWORK_CONFIGURATION_SUCCESS = 'DEVICE_SAVE_NETWORK_CONFIGURATION_SUCCESS';
export const DEVICE_SAVE_NETWORK_CONFIGURATION_FAIL = 'DEVICE_SAVE_NETWORK_CONFIGURATION_FAIL';

export const DEVICE_DATA_SETS_START = 'DEVICE_DATA_SETS_START';
export const DEVICE_DATA_SETS_SUCCESS = 'DEVICE_DATA_SETS_SUCCESS';
export const DEVICE_DATA_SETS_FAIL = 'DEVICE_DATA_SETS_FAIL';

export const DEVICE_DATA_SET_START = 'DEVICE_DATA_SET_START';
export const DEVICE_DATA_SET_SUCCESS = 'DEVICE_DATA_SET_SUCCESS';
export const DEVICE_DATA_SET_FAIL = 'DEVICE_DATA_SET_FAIL';

export const DEVICE_ERASE_DATA_SET_START = 'DEVICE_ERASE_DATA_SET_START';
export const DEVICE_ERASE_DATA_SET_SUCCESS = 'DEVICE_ERASE_DATA_SET_SUCCESS';
export const DEVICE_ERASE_DATA_SET_FAIL = 'DEVICE_ERASE_DATA_SET_FAIL';

export const DEVICE_MODULE_QUERY_START = 'DEVICE_MODULE_QUERY_START';
export const DEVICE_MODULE_QUERY_SUCCESS = 'DEVICE_MODULE_QUERY_SUCCESS';
export const DEVICE_MODULE_QUERY_FAIL = 'DEVICE_MODULE_QUERY_FAIL';

export const EMAIL_DATA_SET_START = 'EMAIL_DATA_SET_START';
export const EMAIL_DATA_SET_SUCCESS = 'EMAIL_DATA_SET_SUCCESS';
export const EMAIL_DATA_SET_FAIL = 'EMAIL_DATA_SET_FAIL';

export const DEVICE_DOWNLOAD_DATA_SET_START = 'DEVICE_DOWNLOAD_DATA_SET_START';
export const DEVICE_DOWNLOAD_DATA_SET_SUCCESS = 'DEVICE_DOWNLOAD_DATA_SET_SUCCESS';
export const DEVICE_DOWNLOAD_DATA_SET_FAIL = 'DEVICE_DOWNLOAD_DATA_SET_FAILE';

export const DEVICE_LIVE_DATA_POLL_START = 'DEVICE_LIVE_DATA_POLL_START';
export const DEVICE_LIVE_DATA_POLL_SUCCESS = 'DEVICE_LIVE_DATA_POLL_SUCCESS';
export const DEVICE_LIVE_DATA_POLL_FAIL = 'DEVICE_LIVE_DATA_POLL_FAIL';

export const DEVICE_CONNECTION_ERROR = 'DEVICE_CONNECTION_ERROR';

export const DOWNLOAD_DATA_SET_START = 'DOWNLOAD_DATA_SET_START';
export const DOWNLOAD_DATA_SET_PROGRESS = 'DOWNLOAD_DATA_SET_PROGRESS';
export const DOWNLOAD_DATA_SET_DONE = 'DOWNLOAD_DATA_SET_DONE';

export const FIND_DEVICE_START = 'FIND_DEVICE_START';
export const FIND_DEVICE_FAIL = 'FIND_DEVICE_FAIL';
export const FIND_DEVICE_STOP = 'FIND_DEVICE_STOP';
export const FIND_DEVICE_INFO = 'FIND_DEVICE_INFO';
export const FIND_DEVICE_SUCCESS = 'FIND_DEVICE_SUCCESS';
export const FIND_DEVICE_LOST = 'FIND_DEVICE_LOST';
export const FIND_DEVICE_SELECT = 'FIND_DEVICE_SELECT';

export const LIVE_DATA_POLL_START = 'LIVE_DATA_POLL_START';
export const LIVE_DATA_POLL_STOP = 'LIVE_DATA_POLL_STOP';

export const TIMER_START = 'TIMER_START';
export const TIMER_TICK = 'TIMER_TICK';
export const TIMER_CANCEL = 'TIMER_CANCEL';
export const TIMER_DONE = 'TIMER_DONE';
