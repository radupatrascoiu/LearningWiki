import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import '../../styles/quiz.css'

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
                        // question.answers.map((answer, index) => {

                        //     return (
                        //         // question.correctOptionIndex === markedAnswers[index].index
                        //         //     ?
                        //         //     <div
                        //         //         className="option correct">
                        //         //         <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                        //         //     </div>
                        //         //     :
                        //         //     console.log(index)
                        //         // (index === markedAnswers[index].index
                        //         //     ?
                        //         //     <div
                        //         //         className="option wrong">
                        //         //         <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                        //         //     </div>
                        //         //     :
                        //         //     <div>
                        //         //         <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                        //         //     </div>
                        //         // )
                        //     );
                        // })



                        // markedAnswers.map((markedAnswer, index) => {
                        //     return (
                        //         markedAnswer.index === question.correctOptionIndex
                        //             ?
                        //             question.answers.map((answer, index) => {
                        //                 <div>
                        //                     <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                        //                 </div>
                        //             })
                        //             :
                        //             question.answers.map((answer, index) => {
                        //                 <div>
                        //                     <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                        //                 </div>
                        //             })
                        //     )
                        // })


                        question.answers.map((answer, index) => {
                            return (
                                question.correctOptionIndex === markedAnswers[currentQuestion - 1].index
                                    ? (index === currentQuestion - 1 ?
                                        <div className="option correct">
                                            <td dangerouslySetInnerHTML={{ __html: question.answers[currentQuestion - 1].content }} />
                                        </div>
                                        :
                                        <div>
                                            <td dangerouslySetInnerHTML={{ __html: question.answers[currentQuestion - 1].content }} />
                                        </div>
                                    )

                                    : (index === currentQuestion - 1 ?
                                        <div className="option wrong">
                                            <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                        </div>
                                        :
                                        <div>
                                            <td dangerouslySetInnerHTML={{ __html: question.answers[currentQuestion - 1].content }} />
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