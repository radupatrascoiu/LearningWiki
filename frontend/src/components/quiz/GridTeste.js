import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TestCard from './TestCard'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';

import '../../styles/tests.css'

const GridTeste = ({ courseName, clasa }) => {
    const { initialized, keycloak } = useKeycloak();
    const [tests, setTests] = useState([]);

    // Load data on mount 
    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getTests(keycloak.token, courseName, clasa);
                console.log(response.data)
                setTests(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak, clasa]);

    return (
        <div className='test-selection'>
            <Container sige="lg">
                <Grid container spacing={3}>
                    {tests.map(test => (
                        <Grid item xs={12} md={6} lg={4} key={test.id}>
                            <TestCard courseName={courseName} test={test} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default GridTeste;