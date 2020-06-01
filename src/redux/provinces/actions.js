import {
    PROVINCE_SELECT_REQUEST,
    PROVINCE_SELECT_SUCCESS,
    PROVINCE_SELECT_FAILURE,
} from './types';

export const provinceSelectRequest = () => {
    return {
        type: PROVINCE_SELECT_REQUEST,
    };
};

export const provinceSelectSuccess = (payload) => {
    return {
        type: PROVINCE_SELECT_SUCCESS,
        payload,
    };
};
export const provinceSelectFailure = (payload) => {
    return {
        type: PROVINCE_SELECT_FAILURE,
        payload,
    };
};
