import React, { useEffect, useState } from 'react'
import FeedbackQuestion from './FeedbackQuestion'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';
import '../../styles/quiz.css'
import FeedbackFinalScreen from './FeedbackFinalScreen';

const FeedbackQuizScreen = ({ solvedTest }) => {
    const { initialized, keycloak } = useKeycloak();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const QuestionList = solvedTest.test.questions;
    const markedAnswers = solvedTest.markedAnswers;
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <FeedbackFinalScreen
                        solvedTest={solvedTest}
                        goBack={() => {
                            setCurrentQuestionIndex(0);
                        }}
                    />
                ) : (
                    <FeedbackQuestion
                        question={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length}
                        currentQuestion={currentQuestionIndex + 1}
                        setNextQuestion={() => {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                        setPreviousQuestion={() => {
                            if (currentQuestionIndex > 0) {
                                setCurrentQuestionIndex(currentQuestionIndex - 1);
                            }
                        }}

                        solvedTest={solvedTest}
                        markedAnswers={markedAnswers}
                    />
                )
            }

        </div>
    );
}

export default FeedbackQuizScreen;