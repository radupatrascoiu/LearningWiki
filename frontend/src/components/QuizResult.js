import { Button } from "@mui/material";
import '../styles/quiz.css'

const QuizResult = ({ result, retry }) => {
    return (
        <div className="result-screen">
            <h2>Rezultat: {result.percentage}%</h2>
            <p>Ai raspun corect la {result.correct} din {result.total} intrebari.</p>
            <Button onClick={retry}>Reincearca</Button>
        </div>
    );
}
 
export default QuizResult;