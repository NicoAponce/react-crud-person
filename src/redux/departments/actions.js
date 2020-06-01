import {
    DEPARTMENT_SELECT_REQUEST,
    DEPARTMENT_SELECT_SUCCESS,
    DEPARTMENT_SELECT_FAILURE,
} from './types';

export const departamentSelectRequest = () => {
    return {
        type: DEPARTMENT_SELECT_REQUEST,
    };
};

export const departamentSelectSuccess = (payload) => {
    return {
        type: DEPARTMENT_SELECT_SUCCESS,
        payload,
    };
};

export const departamentSelectFailure = (payload) => {
    return {
        type: DEPARTMENT_SELECT_FAILURE,
        payload,
    };
};
