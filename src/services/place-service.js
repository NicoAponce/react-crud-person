import apiAxios from '../api/api-axios';

class PlaceService {
    static selectPlace = (payload) => {
        return apiAxios.post(`/api/place/get`, payload);
    };

    static insertPlace = (payload) => {
        return apiAxios.post(`/api/place`, payload);
    };

    static updatePlace = (id, payload) => {
        return apiAxios.put(`/api/place/${id}`, payload);
    };

    static getPlace = (payload) => {
        return apiAxios.get(`/api/place/${payload}`);
    };

    static deletePlace = (payload) => {
        return apiAxios.delete(`/api/place/${payload}`);
    };
}

export default PlaceService;
