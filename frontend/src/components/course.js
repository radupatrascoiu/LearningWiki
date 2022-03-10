import { useState } from "react";
import { useEffect } from "react";
import '../styles/course.css'

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Alert, Button } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Course = () => {
    return (
        <div className="courseContainer">
            {
                <Card sx={{ maxWidth: "100%" }}>
                    <CardContent>
                        <Typography sx={{ my: "20px" }} gutterBottom variant="h5" component="div">Nume curs</Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: "50%" }} aria-label="spanning table">
                                <TableBody>
                                    <TableRow key={1 + "professor"}>
                                        <TableCell>Professor 🙍</TableCell>
                                        <TableCell className="sizedText" align="center">Nume profesor</TableCell>
                                    </TableRow>
                                    <TableRow key={1 + "credits"}>
                                        <TableCell>Credits 💰</TableCell>
                                        <TableCell className="sizedText" align="center">Credite</TableCell>
                                    </TableRow>
                                    <TableRow key={1 + "infos"}>
                                        <TableCell>Infos ℹ️</TableCell>
                                        <TableCell align="center" sx={{ width: "50%" }}>
                                        <Typography className="sizedText" fontSize="13px">Informatii</Typography>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={1 + "requirements"}>
                                        <TableCell>Requirements ⚔️</TableCell>
                                        <TableCell align="center" sx={{ width: "50%" }}>
                                            <Typography className="sizedText" fontSize="13px">Requirements</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions sx={{ my: "20px" }}>
                        <Button variant="outlined" sx={{ mx: "auto", marginBottom: "10px" }} >Teste</Button> <br />
                        <Button variant="outlined" sx={{ mx: "auto", marginBottom: "10px" }} >Videoclipuri</Button> <br />
                    </CardActions>
                </Card>
            }
        </div>
    );
}
 
export default Course;