import axios from 'axios';
import { config } from '../utils/constants';

export const userApi = {
    getUsers,
    getCourses,
    getCourse,
    getChapters,
    editChapterContent,
    getChapter,
    getAllProfessors,
    addNewMentoring,
    getMyMentor,
    reportAMistake,
    getMistakes,
    deleteMistake
}

function getUsers(token) {
    return instance.get(`/api/users/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getAllProfessors(token) {
    return instance.get(`/api/users/professors`, {
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

function getChapter(token, chapterId) {
    return instance.get(`/api/chapters/${chapterId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function editChapterContent(token, chapterId, name, description, content) {
    return instance.put(`/api/chapters/edit/`, {
        id: chapterId,
        name: name,
        description: description,
        content: content
    }, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getMyMentor(token) {
    return instance.get('/api/myMentor', {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function addNewMentoring(token, userId) {
    return instance.post(`/api/mentoring/add/${userId}`, "", {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function reportAMistake(token, materie, clasa, capitol, detalii) {
    return instance.post(`/api/mistakes/add`, {
        courseName: materie,
        classCourse: clasa,
        chapter: capitol,
        details: detalii
    }, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getMistakes(token) {
    return instance.get('/api/mistakes', {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function deleteMistake(token, mistakeId) {
    return instance.delete(`/api/mistakes/delete/${mistakeId}`, {
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