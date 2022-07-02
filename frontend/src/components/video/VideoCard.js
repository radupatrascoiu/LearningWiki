import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { makeStyles } from "@mui/styles";
import '../../styles/videoclipuri.css'

import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const useStyles = makeStyles({
    card: {
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
        width: "1100px"
    }
});

const VideoCard = ({ courseName, video }) => {
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/courses/${courseName}/videoclipuri/${video.id}`)}>
            <Card
                sx={{ display: 'flex' }}
                className={classes.card}
                elevation={1}
            >

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {video.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {video.description}
                        </Typography>
                    </CardContent>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>

                <CardMedia
                    component="img"
                    image="https://static.tildacdn.com/tild6637-3561-4939-a430-346531313335/how-to-upload-a-vide.jpg"
                    alt="Live from space album cover"
                />
            </Card>
        </div>
    )
}

export default VideoCard;