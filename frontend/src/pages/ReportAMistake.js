import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

const ReportAMistake = () => {
    return (
        <div className="container">
            <div className="not-found">
                <Typography
                    variant="h2"
                    color="textPrimary"
                    align="center"
                    marginTop="100px"
                >
                    Ai identificat o greseala?
                </Typography>

                <Typography
                    variant="h4"
                    color="textSecondary"
                    align="center"
                    marginBottom="20px"
                >
                    Scrie detaliile in formular, iar noi ne ocupam de restul.
                </Typography>
                <Button variant="contained" color="info"><Link to="/raporteazaOGresealaFormular">Raporteaza Greseala!</Link></Button>
            </div>
        </div>
    );
}

export default ReportAMistake;