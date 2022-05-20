import React, { useEffect, useState, useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import '../../styles/quiz.css'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';
import Typography from '@mui/material/Typography'

const JoinScreen = ({ start, test }) => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const { initialized, keycloak } = useKeycloak();
    const [feedbacks, setFeedbacks] = useState([]);

    const handleClickOpen = (scrollType) => () => {
        if (feedbacks != [] || feedbacks != null) {
            setOpen(true);
            setScroll(scrollType);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(async () => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }

        if (keycloak && initialized) {
            try {
                const response = await userApi.getFeedbacksByTestId(keycloak.token, test?.id);
                console.log("BEFORE")
                console.log(response.data)
                console.log("AFTER")
                setFeedbacks(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak, open]);

    return (
        <div className="join-screen">
            <h2>{test?.name}</h2>
            <p>Alege un singur raspuns. La sfarsit vei primi rezultatul.</p>
            <Button onClick={start}>Start</Button>
            <Button color="secondary" onClick={handleClickOpen('paper')}>Vezi feedback</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            // maxWidth='sm'
            // fullWidth
            >
                <DialogTitle id="scroll-dialog-title">Feedback primit de la mentor</DialogTitle>
                <DialogContent dividers>
                    {feedbacks.length === 0 ?

                        <Typography variant='h5' color="secondary"> Momentan nu exista feedback pentru acest test.</Typography>
                        :
                        feedbacks.map(feedback => (
                            <>
                                <Typography variant='h4' color="secondary"> Feedback nr. {feedbacks.indexOf(feedback) + 1}</Typography>
                                <Typography>{feedback.content}</Typography>
                                <br />
                                <br />
                            </>
                        ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Inchide</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default JoinScreen;