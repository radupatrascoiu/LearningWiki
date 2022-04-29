import QuizScreen from '../components/quiz/QuizScreen'
import JoinScreen from '../components/quiz/JoinScreen'
import { useKeycloak } from '@react-keycloak/web';
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { userApi } from '../services/userApi';
import '../styles/quiz.css'

const Test = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    const { courseName, testId } = useParams();
    const [test, setTest] = useState(null);

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getTest(keycloak.token, testId);
                console.log("TEST: " + response.data)
                setTest(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak]);

    return (initialized && keycloak?.authenticated &&
        <div className="quiz-container">
            {
                isQuizStarted ? (
                    <QuizScreen retry={() => setIsQuizStarted(false)} test={test} />
                ) : (
                    <JoinScreen start={() => setIsQuizStarted(true)} test={test} />
                )
            }
        </div>
    );
}

export default Test;