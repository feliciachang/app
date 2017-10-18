'use strict';

export const NAVIGATION_WELCOME = 'NAVIGATION_WELCOME';
export const NAVIGATION_ABOUT = 'NAVIGATION_ABOUT';
export const NAVIGATION_CONNECTING = 'NAVIGATION_CONNECTING';
export const NAVIGATION_DEVICE_MENU = 'NAVIGATION_DEVICE_MENU';
export const NAVIGATION_DATA_SETS = 'NAVIGATION_DATA_SETS';
export const NAVIGATION_VIEW_DATA_SET = 'NAVIGATION_VIEW_DATA_SET';
export const NAVIGATION_LIVE_DATA = 'NAVIGATION_LIVE_DATA';
export const NAVIGATION_BACK = 'NAVIGATION_BACK';

export function isNavigationAction(action) {
    return /NAVIGATION_(.+)/.test(action.type);
}

export const DEVICE_PING_START = 'DEVICE_PING_START';
export const DEVICE_PING_SUCCESS = 'DEVICE_PING_SUCCESS';
export const DEVICE_PING_FAIL = 'DEVICE_PING_FAIL';

export const DEVICE_CAPABILITIES_START = 'DEVICE_CAPABILITIES_START';
export const DEVICE_CAPABILITIES_SUCCESS = 'DEVICE_CAPABILITIES_SUCCESS';
export const DEVICE_CAPABILITIES_FAIL = 'DEVICE_CAPABILITIES_FAIL';

export const DEVICE_DATA_SETS_START = 'DEVICE_DATA_SETS_START';
export const DEVICE_DATA_SETS_SUCCESS = 'DEVICE_DATA_SETS_SUCCESS';
export const DEVICE_DATA_SETS_FAIL = 'DEVICE_DATA_SETS_FAIL';

export const DEVICE_DATA_SET_START = 'DEVICE_DATA_SET_START';
export const DEVICE_DATA_SET_SUCCESS = 'DEVICE_DATA_SET_SUCCESS';
export const DEVICE_DATA_SET_FAIL = 'DEVICE_DATA_SET_FAIL';

export const DEVICE_ERASE_DATA_SET_START = 'DEVICE_ERASE_DATA_SET_START';
export const DEVICE_ERASE_DATA_SET_SUCCESS = 'DEVICE_ERASE_DATA_SET_SUCCESS';
export const DEVICE_ERASE_DATA_SET_FAIL = 'DEVICE_ERASE_DATA_SET_FAIL';

export const EMAIL_DATA_SET_START = 'EMAIL_DATA_SET_START';
export const EMAIL_DATA_SET_SUCCESS = 'EMAIL_DATA_SET_SUCCESS';
export const EMAIL_DATA_SET_FAIL = 'EMAIL_DATA_SET_FAIL';

export const DEVICE_DOWNLOAD_DATA_SET_START = 'DEVICE_DOWNLOAD_DATA_SET_START';
export const DEVICE_DOWNLOAD_DATA_SET_SUCCESS = 'DEVICE_DOWNLOAD_DATA_SET_SUCCESS';
export const DEVICE_DOWNLOAD_DATA_SET_FAIL = 'DEVICE_DOWNLOAD_DATA_SET_FAILE';

export const DOWNLOAD_DATA_SET_START = 'DOWNLOAD_DATA_SET_START';
export const DOWNLOAD_DATA_SET_PROGRESS = 'DOWNLOAD_DATA_SET_PROGRESS';
export const DOWNLOAD_DATA_SET_DONE = 'DOWNLOAD_DATA_SET_DONE';

export const FIND_DEVICE_START = 'FIND_DEVICE_START';
export const FIND_DEVICE_FAIL = 'FIND_DEVICE_FAIL';
export const FIND_DEVICE_STOP = 'FIND_DEVICE_STOP';
export const FIND_DEVICE_INFO = 'FIND_DEVICE_INFO';
export const FIND_DEVICE_SUCCESS = 'FIND_DEVICE_SUCCESS';
export const FIND_DEVICE_LOST = 'FIND_DEVICE_LOST';
