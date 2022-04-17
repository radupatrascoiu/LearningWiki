import axios from 'axios';
import { config } from '../utils/constants';

export const userApi = {
    getUsers,
    getCourses,
    getCourse,
    getChapters
}

function getUsers(token) {
    return instance.get(`/api/users/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getCourses(token) {
    return instance.get(`/api/courses/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getCourse(token, courseName) {
    return instance.get(`/api/courses/${courseName}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getChapters(token, courseName, year) {
    return instance.get(`/api/courses/${courseName}/materiale/${year}`, {
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