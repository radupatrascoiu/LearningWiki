import React from 'react';
import ReactPlayer from 'react-player'
import '../styles/videoclipuri.css'
import { Typography } from '@mui/material';

const VideoPage = ({ id }) => {

    return (
        <div className="video">
            <Typography
                variant="h4"
                color="textPrimary"
                align="center"
                marginTop="50px"
            >
                Numele videoclipului
            </Typography>

            <ReactPlayer
                width='480px'
                height='240px'
                controls
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
        </div>
    );
}

export default VideoPage;