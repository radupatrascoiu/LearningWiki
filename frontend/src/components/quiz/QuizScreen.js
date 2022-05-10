import React, { useEffect, useState } from 'react'
import QuizResult from './QuizResult'
import Question from './Question'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';
import '../../styles/quiz.css'

const QuizScreen = ({ retry, test }) => {
    const { initialized, keycloak } = useKeycloak();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const QuestionList = test.questions;
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    console.log(QuestionList.length);
    console.log("Current = " + currentQuestionIndex);

    const calculateResult = () => {
        let correct = 0;
        console.log("RASPUNSURI: " + markedAnswers);
        QuestionList.forEach((question, index) => {
            if (question.correctOptionIndex == markedAnswers[index]) {
                correct++;
            }
        });

        return {
            total: QuestionList.length,
            correct: correct,
            percentage: Math.trunc((correct / QuestionList.length) * 100)
        }
    }

    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizResult
                        result={calculateResult()}
                        retry={retry}
                        test={test}
                        markedAnswers={markedAnswers}
                    />
                ) : (
                    <Question
                        question={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length}
                        currentQuestion={currentQuestionIndex + 1}
                        setAnswer={(index) => {
                            setMarkedAnswers((arr) => {
                                let newArr = [...arr];
                                newArr[currentQuestionIndex - 1] = index;
                                return newArr;
                            });
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                        test={test}
                    />
                )
            }
        </div>
    );
}

export default QuizScreen;