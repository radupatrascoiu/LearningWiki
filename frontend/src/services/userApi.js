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
    deleteMistake,
    getTests,
    getTest,
    getVideos,
    getVideo,
    addSolvedTest,
    getAllTestsByCourseName,
    getSolvedTestsByUserEmailAndCourseName,
    getSolvedTestByTestIdAndUserEmail,
    getMyStudents,
    getSolvedTestById,
    sendFeedback,
    getFeedbacksByUserId,
    getFeedbacksByTestId,
    getFeedbacksBySolvedTestId,
    getSolvedTestsByUser,
    getAttemptedTestsByUser,
    getFeedbacksByUser,
    getProgressByUser,
    getLastSolvedTestsByUser,
    getAllUsersProgress,
    getTestsInTheLastPeriodByClass
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

function getTests(token, courseName, year) {
    return instance.get(`/api/tests/${courseName}/${year}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getTest(token, testId) {
    return instance.get(`/api/tests/${testId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getVideos(token, courseName, year) {
    return instance.get(`/api/videos/${courseName}/${year}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getVideo(token, videoId) {
    return instance.get(`/api/videos/${videoId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function addSolvedTest(token, userEmail, testId, score, markedAnswers) {
    return instance.post(`/api/solved_tests/add`, {
        userEmail: userEmail,
        testId: testId,
        score: score,
        markedAnswers: markedAnswers
    }, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getAllTestsByCourseName(token, courseName) {
    return instance.get(`/api/tests/by_course/${courseName}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getSolvedTestsByUserEmailAndCourseName(token, userEmail, courseName) {
    return instance.get(`/api/solved_tests/by_course/${userEmail}/${courseName}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getSolvedTestByTestIdAndUserEmail(token, testId, userEmail) {
    return instance.get(`/api/solved_tests/${testId}/${userEmail}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getSolvedTestsByUser(token) {
    return instance.get(`/api/solved_tests/by_userEmail/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getAttemptedTestsByUser(token) {
    return instance.get(`/api/solved_tests/attempted_tests/by_userEmail/`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getSolvedTestById(token, solvedTestId) {
    return instance.get(`/api/solved_tests/${solvedTestId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getMyStudents(token) {
    return instance.get(`/api/mentoring/my_students`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function sendFeedback(token, content, userId, solvedTestId) {
    return instance.post(`/api/feedback_mentoring/add/${content}/${userId}/${solvedTestId}`, "", {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getFeedbacksByUserId(token, userId) {
    return instance.get(`/api/feedback_mentoring/by_userId/${userId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getFeedbacksByUser(token) {
    return instance.get(`/api/feedback_mentoring/by_userId`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getFeedbacksByTestId(token, testId) {
    return instance.get(`/api/feedback_mentoring/by_testId/${testId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getFeedbacksBySolvedTestId(token, solvedTestId) {
    return instance.get(`/api/feedback_mentoring/by_SolvedTestId/${solvedTestId}`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getProgressByUser(token) {
    return instance.get(`/api/progress`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getAllUsersProgress(token) {
    return instance.get(`/api/solved_tests/ranking_by_progress`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getLastSolvedTestsByUser(token) {
    return instance.get(`/api/solved_tests/last_solved_tests`, {
        headers: {
            'Authorization': bearerAuth(token)
        }
    })
}

function getTestsInTheLastPeriodByClass(token) {
    return instance.get(`/api/solved_tests/in_the_last_period`, {
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