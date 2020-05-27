import axios from 'axios';
import {ENV} from '../constants/enviroment';

const ApiAxios = axios.create({
    baseURL: ENV.BACKEND_URL,
});

export default ApiAxios;
