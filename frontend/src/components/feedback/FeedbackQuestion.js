import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import '../../styles/quiz-feedback.css'

const FeedbackQuestion = ({ question, totalQuestions, currentQuestion, setNextQuestion, setPreviousQuestion, solvedTest, markedAnswers }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const goToNextQuestion = () => {

        flushSync(() => {
            setNextQuestion(selectedOption);
        });
        setSelectedOption(null);
    }

    const goToPreviousQuestion = () => {
        flushSync(() => {
            setPreviousQuestion(selectedOption);
        });
        setSelectedOption(null);
    }

    useEffect(async () => {
        return goToNextQuestion;
    }, [question]);

    return (
        <div className="question_feedback">
            <div className="question-count">
                <b> {currentQuestion} </b>
                din
                <b> {totalQuestions} </b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Intrebare:</span>
                    <td dangerouslySetInnerHTML={{ __html: question.title }} />
                </div>
                <div className="options">
                    {
                        question.answers.map((answer, index) => {
                            return (
                                question.correctOptionIndex === markedAnswers[currentQuestion - 1].index
                                    ? (
                                        <div className={index === question.correctOptionIndex ? "option correct" : "option normal "} key={index}>
                                            <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                        </div>
                                    )
                                    : (index === markedAnswers[currentQuestion - 1].index ?
                                        <div className="option wrong" key={index}>
                                            <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                        </div>
                                        :
                                        <div className={index === question.correctOptionIndex ? "option correct" : "option normal "} key={index}>
                                            <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                        </div>
                                    )
                            )
                        })
                    }
                </div>
            </div>

            <div className="arrows">
                <Button onClick={goToPreviousQuestion}>Intrebarea anterioara ⬅️</Button>
                <Button onClick={goToNextQuestion}>Intrebarea urmatoare ➡️</Button>
            </div>
        </div>
    );
}

export default FeedbackQuestion;