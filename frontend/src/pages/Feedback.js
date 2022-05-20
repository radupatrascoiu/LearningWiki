import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import { capitalizeFirstLetter } from '../utils/util';

function Cacat(props) {
    const { solvedTest } = props;
    const { initialized, keycloak } = useKeycloak();
    const [error, setError] = useState(false);
    const [sentFeedback, setSentFeedback] = useState(false)

    const isFeedbackSent = async (solvedTest) => {
        try {
            const response = await userApi.getFeedbacksBySolvedTestId(keycloak?.token, solvedTest?.id)
            if (response.status === 200) {
                return response.data.length;
            }
        } catch (error) {
            setError(true);
        }
    }

    useEffect(async () => {
        if (keycloak && initialized) {
            const length = await isFeedbackSent(solvedTest);
            if (length > 0) {
                setSentFeedback(true);
            } else {
                setSentFeedback(false);
            }
        }
    }, [keycloak, initialized, solvedTest])

    return (
        <div>
            {console.log(sentFeedback)}
        </div>
    )
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const { initialized, keycloak } = useKeycloak();
    const [error, setError] = useState(false);
    const [nofeedbacks, setNofeedbacks] = useState(null);
    const [sentFeedback, setSentFeedback] = useState(false)

    console.log(row)

    const getNoFeedback = async (userId) => {
        try {
            const response = await userApi.getFeedbacksByUserId(keycloak?.token, userId);
            if (response.status === 200) {
                return response.data.length;
            }
        } catch (error) {
            setError(true);
        }

        return 0;
    };

    const isFeedbackSent = async (solvedTest) => {
        try {
            const response = await userApi.getFeedbacksBySolvedTestId(keycloak?.token, solvedTest?.id)
            if (response.status === 200) {
                if (response.data.length > 0) {
                    setSentFeedback(true);
                }
            }
        } catch (error) {
            setError(true);
        }
    }

    useEffect(async () => {
        if (keycloak && initialized) {
            const nr = await getNoFeedback(row?.user?.id);
            setNofeedbacks(nr);
        }
    }, [keycloak, initialized])

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row?.user?.name}</TableCell>
                <TableCell align="right">{row?.attemptedTests?.length}</TableCell>
                <TableCell align="right">{row?.solvedTests?.length}</TableCell>
                <TableCell align="right">{nofeedbacks || 0}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Istoric
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Data</TableCell>
                                        <TableCell>Materia</TableCell>
                                        <TableCell>Test</TableCell>
                                        <TableCell>Punctaj</TableCell>
                                        <TableCell>Nr. de incercari</TableCell>
                                        <TableCell>Feedback</TableCell>
                                        <TableCell>Actiuni</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row?.allTests?.map((solvedTest) => (
                                        <TableRow key={solvedTest?.id}>
                                            <TableCell component="th" scope="row">
                                                {solvedTest?.timestamp}
                                            </TableCell>
                                            <TableCell>{capitalizeFirstLetter(solvedTest?.test?.courseName)}</TableCell>
                                            <TableCell>{solvedTest?.test?.name}</TableCell>
                                            <TableCell>{solvedTest?.score} / {solvedTest?.test?.questions?.length}</TableCell>
                                            <TableCell>{solvedTest?.attempts}</TableCell>
                                            <TableCell><Cacat solvedTest={solvedTest}></Cacat></TableCell>
                                            {/* <TableCell>{isFeedbackSent(solvedTest) && sentFeedback === true ? '✅' : '❌'}</TableCell> */}
                                            <TableCell><Button onClick={() => navigate(`/feedback/${solvedTest?.id}`)}>Vezi testul</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function Feedback() {
    const [error, setError] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    const [mentorings, setMentorings] = useState([]);

    const navigate = useNavigate();

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getMyStudents(keycloak?.token);
                console.log("STUDENTI: " + response.data)
                setMentorings(response.data);
            } catch (error) {
                setError(true);
            }
        }
    }, [keycloak, initialized])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Nume elev</TableCell>
                        <TableCell align="right">Teste fara reusita</TableCell>
                        <TableCell align="right">Teste finalizate</TableCell>
                        <TableCell align="right">Nr. de feedback-uri</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mentorings?.map((mentoring) => (
                        <Row key={mentoring.id} row={mentoring} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
