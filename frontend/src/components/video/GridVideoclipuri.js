import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Video from '../../pages/Video'
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


const GridVideoclipuri = ({ clasa }) => {
    const navigate = useNavigate();
    const [renderVideo, setRenderVideo] = useState(false)

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: "100%",
        color: theme.palette.text.primary,
        justifyContent: "center"
    }));

    const message = `Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support. `;

    const cap1 = {
        id: 1,
        link: "http://localhost:3000/courses/matematica/videoclipuri/1",
        title: "Video 1",
        details: "Capitol introductiv despre multimi"
    };

    const cap2 = {
        id: 2,
        link: "http://localhost:3000/courses/matematica/materiale/2",
        title: "Video 2",
        details: "bla bla"
    };

    const cap3 = {
        id: 3,
        link: "http://localhost:3000/courses/matematica/materiale/3",
        title: "Video 3",
        details: "Lecturi grafice"
    }

    const caps = [cap1, cap2, cap3]

    return (
        <div className='videos-selection'>
            <Container sige="lg">
                {!renderVideo ? (
                    <Grid container spacing={2}>
                        <Grid item xs={3} onClick={() => setRenderVideo(true)}>
                            <Card sx={{ maxWidth: 345 }}>
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

                        <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
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

                        <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
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

                        <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
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

                        <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
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
                ) : (
                    <Video id={1}></Video>
                )
                }
            </Container>
        </div>
    );
}

export default GridVideoclipuri;