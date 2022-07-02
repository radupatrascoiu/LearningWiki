import HtmlViewer from "../components/editContent/HtmlViewer";
import { useState } from 'react';
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import AuthorizedFunction from '../utils/authorizedFunction';
import { useKeycloak } from '@react-keycloak/web';

const ChapterContent = () => {
    const navigate = useNavigate();
    const { courseName, chapterId } = useParams();
    const { initialized, keycloak } = useKeycloak();

    return (
        <div>
            <HtmlViewer chapterId={chapterId}></HtmlViewer>
            {AuthorizedFunction(keycloak, ['professor']) &&
                <Button variant="contained" onClick={() => navigate(`/courses/${courseName}/materiale/${chapterId}/edit`)}>Edit</Button>}
        </div>
    );
}

export default ChapterContent;