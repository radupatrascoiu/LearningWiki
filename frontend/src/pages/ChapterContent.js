import HtmlViewer from "../components/editContent/HtmlViewer";
import { useState } from 'react';
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const ChapterContent = () => {
    const navigate = useNavigate();
    const { courseName, chapterId } = useParams();

    return (
        <div>
            <HtmlViewer chapterId={chapterId}></HtmlViewer>
            <Button variant="contained" onClick={() => navigate(`/courses/${courseName}/materiale/${chapterId}/edit`)}>Edit</Button>
        </div>
    );
}

export default ChapterContent;