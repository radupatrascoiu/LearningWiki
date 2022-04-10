import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from "react-router-dom";
import { userApi } from '../services/userApi';
import matematica_logo from '../img/matematica-logo.jpg'
import informatica_logo from '../img/informatica-logo.jpg'

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media: {
        height: 400,
    },
});

const Courses = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [courses, setCourses] = useState(null);
    const [error, setError] = useState(false);
    const { initialized, keycloak } = useKeycloak();

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getCourses(keycloak?.token);
                console.log("RESPONSE: " + response.data)
                setCourses(response.data);
            } catch (error) {
                setError(true);
            }
        }
    }, [keycloak, initialized])

    // console.log(error)
    // console.log("AAA " + courses[0].photo)

    return (initialized && keycloak?.authenticated &&
        <div>
            <Container>
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h2"
                    align="center"
                    padding="20px"
                >
                    Ce vrei sa inveti?
                </Typography>

                {
                    courses &&
                    <Grid container width="100%" justify="center" margin="auto">
                        {
                            courses.map((course, idx) => (

                                < Card
                                    key={idx}
                                    className={classes.card}
                                    sx={{ marginLeft: "6%", marginBottom: "5%" }}
                                >
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        alt={`${course.name}`}
                                        image={`${course.name}` === "matematica" ? matematica_logo : informatica_logo}
                                        onClick={() => navigate(`/courses/${course.name}`)}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {course.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {course.infos}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Enroll me</Button>
                                        <Button size="small" onClick={() => navigate(`/courses/${course.name}`)}>Learn More</Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Grid>
                }

            </Container>
        </div >
    );
}

export default Courses;