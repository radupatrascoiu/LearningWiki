import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

const useStyles = makeStyles({
    card: {
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
        height: "250px"
    }
});

const TestCard = ({ courseName, test }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    console.log("Chapters:" + test.chapters)

    return (
        <div onClick={() => navigate(`/courses/${courseName}/teste/${test.id}`)}>
            <Card
                className={classes.card}
                elevation={1}
            >
                <CardHeader
                    action={
                        "0 / 10"
                    }
                    title={test.name}
                    subheader={test.description}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Capitole acoperite:
                        <List>
                            {test.chapters.map(chapter => (
                                <ListItem
                                    key={chapter.id}
                                    secondaryAction={
                                        <IconButton aria-label="comment">
                                            <CheckIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText secondary={`${chapter.name}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default TestCard;