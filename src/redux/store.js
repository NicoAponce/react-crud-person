import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import DepartmentReducer from './departments/reducers';
import ProvinceReducer from './provinces/reducers';
import DistrictReducer from './districts/reducers';

const rootReducer = combineReducers({
    department: DepartmentReducer,
    province: ProvinceReducer,
    district: DistrictReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
export default store;
