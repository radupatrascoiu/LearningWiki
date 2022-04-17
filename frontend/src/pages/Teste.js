import { useState } from "react";
import QuizScreen from '../components/quiz/QuizScreen'
import JoinScreen from '../components/quiz/JoinScreen'
import { useKeycloak } from '@react-keycloak/web';
import '../styles/quiz.css'

const Teste = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const { initialized, keycloak } = useKeycloak();

    return (initialized && keycloak?.authenticated &&
        <div className="quiz-container">
            {
                isQuizStarted ? (
                    <QuizScreen retry={() => setIsQuizStarted(false)} />
                ) : (
                    <JoinScreen start={() => setIsQuizStarted(true)} />
                )
            }
        </div>
    );
}

export default Teste;