import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import '../../styles/quiz.css'

const FeedbackQuestion = ({ question, totalQuestions, currentQuestion, setNextQuestion, setPreviousQuestion, solvedTest, markedAnswers }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    console.log(markedAnswers)

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
        <div className="question">
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
                                <div
                                    className={question.correctOptionIndex === markedAnswers[0].index ? "option correct" : "option wrong"}
                                    key={index}
                                >
                                    <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                </div>
                            );
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