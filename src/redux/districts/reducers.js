import {
    DISTRICT_SELECT_REQUEST,
    DISTRICT_SELECT_SUCCESS,
    DISTRICT_SELECT_FAILURE,
} from './types';

const initialState = {
    districts: [],
    loading: false,
    error: null,
};

const DistrictReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case DISTRICT_SELECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                districts: [],
            };
        case DISTRICT_SELECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                districts: payload,
            };
        case DISTRICT_SELECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
export default DistrictReducer;
