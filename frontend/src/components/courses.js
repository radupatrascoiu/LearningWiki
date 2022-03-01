// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    card: {
      maxWidth: 445,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 400,
    },
  });

const Courses = () => {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Typography
                color="textPrimary"
                gutterBottom
                variant="h2"
                align="center"
                />
                <Grid container padding={50} spacing={20} justify="center">
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="matematica"
                        image={require('../img/matematica-logo.jpg')}
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
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>



                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="informatica"
                        image={require('../img/informatica-logo.jpg')}
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