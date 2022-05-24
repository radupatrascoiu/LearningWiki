import FeedbackQuizScreen from "../components/feedback/FeedbackQuizScreen";
import { useState } from "react";
import { useEffect } from "react";
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';
import { useParams } from "react-router";

const TestFeedback = () => {
    const { solvedTestId } = useParams();
    const [error, setError] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    const [solvedTest, setSolvedTest] = useState(null);

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getSolvedTestById(keycloak?.token, solvedTestId);
                setSolvedTest(response.data);
            } catch (error) {
                setError(true);
            }
        }
    }, [keycloak, initialized])

    return (
        initialized && keycloak?.authenticated && solvedTest &&
        <div className="quiz-container">
            <FeedbackQuizScreen solvedTest={solvedTest}></FeedbackQuizScreen>
        </div>
    );
}

export default TestFeedback;