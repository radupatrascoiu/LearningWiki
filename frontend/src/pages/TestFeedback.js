import FeedbackQuizScreen from "../components/feedback/FeedbackQuizScreen";
import { useState } from "react";
import { useEffect } from "react";
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";

const TestFeedback = () => {
    const { solvedTestId } = useParams();
    const [error, setError] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    const [solvedTest, setSolvedTest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        if (keycloak && initialized) {
            setIsLoading(true)
            try {
                const response = await userApi.getSolvedTestById(keycloak?.token, solvedTestId);
                setSolvedTest(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false)
            }
        }
    }, [keycloak, initialized])

    return (
        initialized && keycloak?.authenticated && solvedTest &&
        <div className="quiz-container">
            {!isLoading &&
                <FeedbackQuizScreen solvedTest={solvedTest}></FeedbackQuizScreen>
            }

            {isLoading && <CircularProgress />}
        </div>
    );
}

export default TestFeedback;