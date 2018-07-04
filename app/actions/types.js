export const NAVIGATION_WELCOME = 'NAVIGATION_WELCOME';
export const NAVIGATION_ABOUT = 'NAVIGATION_ABOUT';
export const NAVIGATION_CONNECTING = 'NAVIGATION_CONNECTING';
export const NAVIGATION_DEVICE_MENU = 'NAVIGATION_DEVICE_MENU';
export const NAVIGATION_FILES = 'NAVIGATION_FILES';
export const NAVIGATION_SENSORS = 'NAVIGATION_SENSORS';
export const NAVIGATION_CONFIGURE = 'NAVIGATION_CONFIGURE';
export const NAVIGATION_NETWORK = 'NAVIGATION_NETWORK';
export const NAVIGATION_LIVE_DATA = 'NAVIGATION_LIVE_DATA';
export const NAVIGATION_BACK = 'NAVIGATION_BACK';
export const NAVIGATION_BROWSER = 'NAVIGATION_BROWSER';
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

export const DEVICE_RESET_START = 'DEVICE_RESET_START';
export const DEVICE_RESET_SUCCESS = 'DEVICE_RESET_SUCCESS';
export const DEVICE_RESET_FAIL = 'DEVICE_RESET_FAIL';

export const DEVICE_FILES_START = 'DEVICE_FILES_START';
export const DEVICE_FILES_SUCCESS = 'DEVICE_FILES_SUCCESS';
export const DEVICE_FILES_FAIL = 'DEVICE_FILES_FAIL';

export const DEVICE_ERASE_FILE_START = 'DEVICE_ERASE_FILE_START';
export const DEVICE_ERASE_FILE_SUCCESS = 'DEVICE_ERASE_FILE_SUCCESS';
export const DEVICE_ERASE_FILE_FAIL = 'DEVICE_ERASE_FILE_FAIL';

export const DEVICE_MODULE_QUERY_START = 'DEVICE_MODULE_QUERY_START';
export const DEVICE_MODULE_QUERY_SUCCESS = 'DEVICE_MODULE_QUERY_SUCCESS';
export const DEVICE_MODULE_QUERY_FAIL = 'DEVICE_MODULE_QUERY_FAIL';

export const DEVICE_DOWNLOAD_FILE_START = 'DEVICE_DOWNLOAD_FILE_START';
export const DEVICE_DOWNLOAD_FILE_SUCCESS = 'DEVICE_DOWNLOAD_FILE_SUCCESS';
export const DEVICE_DOWNLOAD_FILE_FAIL = 'DEVICE_DOWNLOAD_FILE_FAIL';

export const DEVICE_LIVE_DATA_POLL_START = 'DEVICE_LIVE_DATA_POLL_START';
export const DEVICE_LIVE_DATA_POLL_SUCCESS = 'DEVICE_LIVE_DATA_POLL_SUCCESS';
export const DEVICE_LIVE_DATA_POLL_FAIL = 'DEVICE_LIVE_DATA_POLL_FAIL';

export const DEVICE_CONNECTION_ERROR = 'DEVICE_CONNECTION_ERROR';

export const DOWNLOAD_FILE_START = 'DOWNLOAD_FILE_START';
export const DOWNLOAD_FILE_PROGRESS = 'DOWNLOAD_FILE_PROGRESS';
export const DOWNLOAD_FILE_DONE = 'DOWNLOAD_FILE_DONE';

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

export const LOCAL_FILES_BROWSE = 'LOCAL_FILES_BROWSE';

export const OPERATION_CANCEL = 'OPERATION_CANCEL';

export const WIFI_SSID_CHANGED = 'WIFI_SSID_CHANGED';
