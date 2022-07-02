import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    transition: "transform 0.5s ease-in-out",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
    height: "250px",
    width: "350px"
  }
});

const CapitolCard = ({ courseName, chapter, handleLearnMore }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/courses/${courseName}/materiale/${chapter.id}/view`)}>
      <Card
        className={classes.card}
        elevation={1}
      >
        <CardHeader
          action={
            <IconButton onClick={() => handleLearnMore(chapter.link)}>
              {chapter.number}
            </IconButton>
          }
          title={chapter.name}
          subheader={chapter.description}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {chapter.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CapitolCard;