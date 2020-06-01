import apiAxios from '../api/api-axios';

class UbigeoService {
    static selectDepartment = () => {
        return apiAxios.get(`/api/departament`);
    };

    static selectProvince = () => {
        return apiAxios.get(`/api/province`);
    };

    static selectDistrict = () => {
        return apiAxios.get(`/api/district`);
    };

    static getProvince = (payload) => {
        return apiAxios.post(`/api/province/get`, payload);
    };

    static getDistrict = (payload) => {
        return apiAxios.post(`/api/district/get`, payload);
    };
}
export default UbigeoService;
