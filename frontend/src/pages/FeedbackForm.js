import { Alert, Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Stack from "@mui/material/Stack";
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { userApi } from '../services/userApi';
import { useKeycloak } from '@react-keycloak/web';
import { useParams } from "react-router";

const FeedbackForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [detalii, setDetalii] = useState("");
    const { initialized, keycloak } = useKeycloak();
    const { userId, solvedTestId } = useParams();
    const [state, setState] = useState(0);

    const handleChangeDetalii = (event) => {
        setDetalii(event.target.value);
    };

    const handleClose = (event) => {
        navigate("/feedback")
    }

    const handleCloseError = () => {
        setOpen(false);
    };

    const handleSentInformation = async (event) => {
        if (detalii === "") {
            setOpen(true)
        } else {
            const response = await userApi.sendFeedback(keycloak.token, detalii, userId, solvedTestId);
            if (response.status === 200) {
                setState(1);
                setTimeout(() => navigate('/feedback'), 3000)
            } else {
                setState(-1);
            }
        }
    }

    return (
        <div>
            <Dialog open={true} PaperProps={{
                sx: {
                    width: "100%"
                }
            }}>
                <DialogTitle>Feedback-ul tau conteaza</DialogTitle>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '55ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <DialogContent>
                        <div className='aditionalDetailsContainer'>
                            <FormControl sx={{ m: 2, minWidth: 400 }}>
                                <TextField
                                    label="Detalii"
                                    required={true}
                                    error={detalii === '' ? true : false}
                                    variant="standard"
                                    multiline
                                    rows={4}
                                    value={detalii}
                                    onChange={handleChangeDetalii}
                                />
                            </FormControl>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={handleSentInformation}>Trimite informatiile</Button>
                                <Button variant="contained" onClick={handleClose}>Inchide</Button>
                            </Stack>
                        </div>
                    </DialogContent>
                </Box>
                <div>
                    {state === 1
                        ? <Alert severity="success">Feedback trimis cu succes! Vei fi redirectionat...</Alert>
                        : <div></div>}
                    {state === -1
                        ? <Alert severity="error">S-a intamplat ceva gresit, te rog incearca din nou!</Alert>
                        : <div></div>}
                </div>

            </Dialog>

            <Dialog
                open={open}
                onClose={handleCloseError}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Eroare"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <center>Nu poti trimite un feedback gol.</center>
                        <center>Te rog scrie ceva relevant pentru elevul tau.</center>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseError} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default FeedbackForm;