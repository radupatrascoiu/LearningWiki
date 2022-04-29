import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import '../styles/videoclipuri.css'
import { Container, Typography } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';
import { useParams } from "react-router";
import Paper from '@mui/material/Paper';

const VideoPage = () => {
    const { initialized, keycloak } = useKeycloak();
    const [video, setVideo] = useState(null);
    const { courseName, videoId } = useParams();

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getVideo(keycloak.token, videoId);
                console.log(response.data)
                setVideo(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak]);

    const styles = {
        paperContainer: {
            backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/544/694/non_2x/white-abstract-background-vector-gray-abstract-modern-design-background-for-report-and-project-presentation-template-vector-illustration-graphic-futuristic-and-circular-curve-shape.jpg)`
        }
    };

    return (video &&
        <div className="video-container">
            <div className="video-title">
                <Typography
                    variant="h4"
                    color="textPrimary"
                    align="center"
                    marginTop="50px"
                >
                    {video?.name}
                </Typography>
            </div>

            <div className="video">
                <ReactPlayer
                    width='1080px'
                    height='600px'
                    controls
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                />
            </div>
        </div>
    );
}

export default VideoPage;