import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../styles/quiz.css'

const FeedbackFinalScreen = ({ solvedTest, goBack }) => {
    const navigate = useNavigate();

    return (
        <div className="result-screen">
            <h2>Rezultat: {Math.trunc((solvedTest.score / solvedTest.test.questions.length) * 100)}%</h2>
            <p><b>{solvedTest.user.name}</b> a raspuns corect la {solvedTest.score} din {solvedTest.test.questions.length} intrebari.</p >
            <Button onClick={() => navigate(`/feedback/${solvedTest.user.id}/${solvedTest.id}`)}>Ofera feedback</Button>
            <Button onClick={goBack}>Intoarce-te la inceputul testului</Button>
        </div >
    );
}

export default FeedbackFinalScreen;