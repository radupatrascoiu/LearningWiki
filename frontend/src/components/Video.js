import React from 'react';
import VideoPlayer from "react-video-js-player"
import Video1 from '../videos/Functii-partea1.mp4'

const Video = ({ id }) => {
    const videoSrc = Video1;

    return (
        <div className="video">
            <VideoPlayer src={videoSrc} width="720" height="420" />
        </div>
    );
}
 
export default Video;