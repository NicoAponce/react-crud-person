import {
    DISTRICT_SELECT_REQUEST,
    DISTRICT_SELECT_SUCCESS,
    DISTRICT_SELECT_FAILURE,
} from './types';

export const districtSelectRequest = () => {
    return {
        type: DISTRICT_SELECT_REQUEST,
    };
};
export const districtSelectSuccess = (payload) => {
    return {
        type: DISTRICT_SELECT_SUCCESS,
        payload,
    };
};
export const districtSelectFailure = (payload) => {
    return {
        type: DISTRICT_SELECT_FAILURE,
        payload,
    };
};
