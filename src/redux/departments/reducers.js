import {
    DEPARTMENT_SELECT_REQUEST,
    DEPARTMENT_SELECT_SUCCESS,
    DEPARTMENT_SELECT_FAILURE,
} from './types';

const initialState = {
    departments: [],
    loading: false,
    error: null,
};

const DepartmentReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case DEPARTMENT_SELECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                departments: [],
            };
        case DEPARTMENT_SELECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                departments: payload,
            };
        case DEPARTMENT_SELECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
export default DepartmentReducer;
