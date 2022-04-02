import axios from 'axios';
import { config } from '../utils/constants';

export const userApi = {
    getUsers

}

function getUsers(token) {
    return instance.get(`/api/users/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

const instance = axios.create({
    baseURL: config.API_URL
})

instance.interceptors.response.use(response => {
    return response;
}, function (error) {
    if (error.response.status === 404) {
        return { stauts: error.response.status };
    }
    return Promise.reject(error.response);
});

function bearerAuth(token) {
    return `Bearer ${token}`
};