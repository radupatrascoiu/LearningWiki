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

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
      transition: "transform 0.25s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media: {
      height: 400,
    },
});

const Courses = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [error, setError] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    useEffect(async () => {
        if (keycloak && initialized) {
            try {

            } catch (error) {
                setError(true);
            }
        }
    }, [keycloak, initialized])

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
                <Grid container width="100%" justify="center" margin="auto">
                    <Card 
                    className={classes.card} 
                    sx={{ marginLeft: "6%" }}
                    >
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="matematica"
                        image={require('../img/matematica-logo.jpg')}
                        onClick={() => navigate("/courses/matematica")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Matematica
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Materiale utile pentru clasele 9-12
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Enroll me</Button>
                        <Button size="small" onClick={() => navigate("/courses/matematica")}>Learn More</Button>
                    </CardActions>
                    </Card>

                    <Card 
                    className={classes.card} 
                    sx={{ marginLeft: "1%" }}
                    >
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="informatica"
                        image={require('../img/informatica-logo.jpg')}
                        onClick={() => navigate("/courses/matematica")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Informatica
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Materiale utile pentru clasele 9-12
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Enroll me</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>

                </Grid>
            </Container>
        </div>
    );
}

export default Courses;