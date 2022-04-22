import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Video from '../../pages/VideoPage'
import '../../styles/videoclipuri.css'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import thumbnail_video1 from "../../img/thumbnails/1.png"
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { List } from 'semantic-ui-react'
import { useParams } from "react-router";

const GridVideoclipuri = ({ clasa }) => {
    const navigate = useNavigate();
    const { courseName, videoId } = useParams();

    return (
        <div className='videos-selection'>
            <Container sige="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3} onClick={navigate(`/courses/${courseName}/videoclipuri/${videoId}`)}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={thumbnail_video1}
                                    alt="video1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Siruri
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Modalitati de a defini un sir, siruri marginite, siruri monotone
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Siruri particular: progresii aritmetice, progresii geometrice, formula termenului
                                        general in functie de un termen dat si ratie, suma primilor n termeni ai unei progresii
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Conditia ca n numere sa fie in progresie aritmetica sau geometrica pentru n ≥ 3
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default GridVideoclipuri;