import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';
import VideoCard from './VideoCard';

const GridVideoclipuri = ({ courseName, clasa }) => {
    const { initialized, keycloak } = useKeycloak();
    const [videos, setVideos] = useState([]);

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getVideos(keycloak.token, courseName, clasa);
                console.log(response.data)
                setVideos(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized, keycloak, clasa]);

    return (
        <div className='videos-selection'>
            <Container sige="lg">
                <Grid container spacing={2}>
                    <Grid item>
                        {videos.map(video => (
                            <Grid item key={video.id}>
                                <VideoCard courseName={courseName} video={video} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default GridVideoclipuri;