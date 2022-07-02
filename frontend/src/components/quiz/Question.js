import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import MDEditor from '@uiw/react-md-editor';
import MarkdownEditor from '@uiw/react-markdown-editor';
import '../../styles/quiz.css'

const Question = ({ question, totalQuestions, currentQuestion, setAnswer, test }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    const goToNextQuestion = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        flushSync(() => {
            setAnswer(selectedOption);
        });
        setSelectedOption(null);
    }

    useEffect(async () => {
        progressBar.current.classList.remove("active");
        setTimeout(() => {
            progressBar.current.classList.add("active");
        }, 0);
        timer.current = setTimeout(goToNextQuestion, 60 * 1000); // 10 seconds
        return goToNextQuestion;
    }, [question]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count">
                <b> {currentQuestion} </b>
                din
                <b> {totalQuestions} </b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Intrebare:</span>
                    {/* <p>{question.title}</p> */}
                    {/* <MDEditor.Markdown source={question.title} /> */}
                    <td dangerouslySetInnerHTML={{ __html: question.title }} />
                </div>
                <div className="options">
                    {
                        question.answers.map((answer, index) => {
                            return (
                                <div
                                    className={index === selectedOption ? "option active" : "option"}
                                    key={index}
                                    onClick={() => setSelectedOption(index)}
                                >
                                    {/* <MDEditor.Markdown source={answer.content} /> */}
                                    <td dangerouslySetInnerHTML={{ __html: answer.content }} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="control">
                <Button onClick={goToNextQuestion}>Urmatoarea intrebare</Button>
            </div>
        </div>
    );
}

export default Question;