import { Button, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useState, useEffect } from 'react';
import '../styles/requests.css'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';

const ReportedMistakes = () => {

    const { initialized, keycloak } = useKeycloak();
    const [error, setError] = useState(false);
    const [mistakes, setMistakes] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshComponent = () => setRefreshFlag(!refreshFlag)

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getMistakes(keycloak.token);
                setMistakes(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak, refreshFlag]);

    const handleDeleteMistake = async (mistakeId) => {
        try {
            const response = await userApi.deleteMistake(keycloak.token, mistakeId);
            refreshComponent()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="requests">
            <Typography
                variant='h5'
            >
                Greselile raportate de utilizatori:
            </Typography>

            <div className="table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Materia</TableCell>
                                <TableCell align="center">Clasa</TableCell>
                                <TableCell align="center">Capitolul</TableCell>
                                <TableCell align="center">Detalii</TableCell>
                                <TableCell align="center">Actiune</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mistakes?.map((mistake) => (
                                <TableRow
                                    key={mistake.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">{mistake.id}</TableCell>
                                    <TableCell align="center">{mistake.courseName}</TableCell>
                                    <TableCell align="center">{mistake.classCourse}</TableCell>
                                    <TableCell align="center">{mistake.chapter}</TableCell>
                                    <TableCell align="center">{mistake.details}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={() => handleDeleteMistake(mistake.id)}
                                        >Rezolvata
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ReportedMistakes;