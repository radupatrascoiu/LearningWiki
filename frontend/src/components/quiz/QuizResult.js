import { Button } from "@mui/material";
import { useEffect } from "react";
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';
import '../../styles/quiz.css'

const QuizResult = ({ result, retry, test, markedAnswers }) => {
    const { initialized, keycloak } = useKeycloak();

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.addSolvedTest(keycloak?.token, keycloak?.userInfo?.email, test.id, result.correct, markedAnswers);
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak]);


    return (
        <div className="result-screen">
            <h2>Rezultat: {result.percentage}%</h2>
            <p>Ai raspuns corect la {result.correct} din {result.total} intrebari.</p>
            <Button onClick={retry}>Reincearca</Button>
        </div>
    );
}

export default QuizResult;