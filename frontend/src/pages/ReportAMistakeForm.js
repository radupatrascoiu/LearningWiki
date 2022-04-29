
import { Button, MenuItem, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Stack from "@mui/material/Stack";
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { userApi } from '../services/userApi';
import { useKeycloak } from '@react-keycloak/web';

const ReportAMistakeForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [materie, setMaterie] = useState("Matematica");
    const [clasa, setClasa] = useState(9);
    const [capitol, setCapitol] = useState("");
    const [detalii, setDetalii] = useState("");
    const { initialized, keycloak } = useKeycloak();

    const handleChangeMaterie = (event) => {
        setMaterie(event.target.value);
    };

    const handleChangeClasa = (event) => {
        setClasa(event.target.value);
    };

    const handleChangeCapitol = (event) => {
        setCapitol(event.target.value);
    };

    const handleChangeDetalii = (event) => {
        setDetalii(event.target.value);
    };

    const handleClose = (event) => {
        navigate("/raporteazaOGreseala")
    }

    const handleCloseError = () => {
        setOpen(false);
    };

    const handleSentInformation = async (event) => {
        if (materie === "" || clasa < 9 || clasa > 12 || capitol === "" || detalii === "") {
            setOpen(true)
        } else {
            console.log("materie = |" + materie + "| clasa = |" + clasa + "| capitol = |" + capitol + "| detalii = |" + detalii + "|");

            const response = await userApi.reportAMistake(keycloak.token, materie, clasa, capitol, detalii);

            navigate("/raporteazaOGreseala")
        }
    }

    return (
        <div>
            <Dialog open={true} PaperProps={{
                sx: {
                    width: "50%"
                }
            }}>
                <DialogTitle>Descrie-ne greseala identificata si noi o vom remedia:</DialogTitle>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <DialogContent>
                        <div className='aditionalDetailsContainer'>
                            <FormControl sx={{ m: 2, minWidth: 400 }}>
                                <InputLabel id="select-materia">Materia</InputLabel>
                                <Select
                                    labelId="select-materia"
                                    id="select-materia"
                                    value={materie}
                                    label="Materia"
                                    onChange={handleChangeMaterie}
                                    required={true}
                                >
                                    <MenuItem value={"Matematica"}>Matematica</MenuItem>
                                    <MenuItem value={"Informatica"}>Informatica</MenuItem>
                                </Select>
                            </FormControl>


                            <FormControl sx={{ m: 2, minWidth: 400 }}>
                                <InputLabel id="select-clasa">Clasa</InputLabel>
                                <Select
                                    labelId="select-clasa"
                                    id="select-clasa"
                                    value={clasa}
                                    label="Clasa"
                                    onChange={handleChangeClasa}
                                    required={true}
                                >
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 2, minWidth: 400 }}>
                                <TextField
                                    label="Capitolul"
                                    error={capitol === '' ? true : false}
                                    required={true}
                                    variant="standard"
                                    value={capitol}
                                    onChange={handleChangeCapitol}
                                />
                            </FormControl>

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
                        Trebuie sa completezi in felul urmator:
                        <br></br>
                        - selectezi o materie;
                        <br></br>
                        - selectezi o clasa;
                        <br></br>
                        - introduci numele capitolului;
                        <br></br>
                        - descrii problema identificata.
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

export default ReportAMistakeForm;