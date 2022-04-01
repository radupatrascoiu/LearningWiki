import { useState } from "react";
import QuizScreen from './QuizScreen'
import JoinScreen from './JoinScreen'
import '../styles/quiz.css'

const Teste = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    return (
        <div className="quiz-container">
            {
                isQuizStarted ? (
                    <QuizScreen retry={() => setIsQuizStarted(false)} />
                ) : (
                    <JoinScreen start={()=> setIsQuizStarted(true)}/>
                )
            }
        </div>
    );
}
 
export default Teste;