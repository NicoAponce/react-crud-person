import apiAxios from '../api/api-axios';

class PersonService {
    static selectPerson = (payload) => {
        return apiAxios.post(`/api/person/get`, payload);
    };

    static insertPerson = (payload) => {
        return apiAxios.post(`/api/person`, payload);
    };

    static getPerson = (payload) => {
        return apiAxios.get(`/api/person/${payload}`);
    };

    static updatePerson = (id, payload) => {
        return apiAxios.put(`/api/person/${id}`, payload);
    };

    static deletePerson = (id) => {
        return apiAxios.delete(`/api/person/${id}`);
    };
}

export default PersonService;
