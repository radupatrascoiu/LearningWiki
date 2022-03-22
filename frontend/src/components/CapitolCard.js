import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    card: {
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
      transition: "transform 0.5s ease-in-out",
      "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
    }
});

const CapitolCard = ({ capitol, handleLearnMore }) => {
    const classes = useStyles();

  return (
    <div onClick={() => alert("Hello from here")}>
      <Card 
      className={classes.card} 
      elevation={1}
      >
        <CardHeader
          action={
            <IconButton onClick={() => handleLearnMore(capitol.link)}>
              <QuestionMarkIcon />
            </IconButton>
          }
          title={capitol.title}
          subheader={capitol.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { capitol.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CapitolCard;