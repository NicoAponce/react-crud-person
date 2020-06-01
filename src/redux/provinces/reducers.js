import {
    PROVINCE_SELECT_REQUEST,
    PROVINCE_SELECT_SUCCESS,
    PROVINCE_SELECT_FAILURE,
} from './types';

const initialState = {
    provinces: [],
    loading: false,
    error: null,
};

const ProvinceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PROVINCE_SELECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                provinces: [],
            };

        case PROVINCE_SELECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                provinces: payload,
            };
        case PROVINCE_SELECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export default ProvinceReducer;
