import {
    DEPARTMENT_SELECT_REQUEST,
    DEPARTMENT_SELECT_SUCCESS,
    DEPARTMENT_SELECT_FAILURE,
} from './types';

export const departmentSelectRequest = () => {
    return {
        type: DEPARTMENT_SELECT_REQUEST,
    };
};

export const departmentSelectSuccess = (payload) => {
    return {
        type: DEPARTMENT_SELECT_SUCCESS,
        payload,
    };
};

export const departmentSelectFailure = (payload) => {
    return {
        type: DEPARTMENT_SELECT_FAILURE,
        payload,
    };
};
