import { Button } from "@mui/material";
import '../styles/quiz.css'

const JoinScreen = ({ start }) => {
    return (
        <div className="join-screen">
            <h2>Test</h2>
            <p>Alege un singur raspuns. La sfarsit vei primi rezultatul.</p>
            <Button onClick={start}>Start</Button>
        </div>
    )
}
 
export default JoinScreen;