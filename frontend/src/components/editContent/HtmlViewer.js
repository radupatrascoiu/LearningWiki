import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Button } from "@mui/material";
import { userApi } from "../../services/userApi";
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import '../../styles/course-content.css'

const HtmlViewer = ({ chapterId }) => {
    const { initialized, keycloak } = useKeycloak();
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getChapter(keycloak?.token, chapterId);
                setContent(response.data.content);
            } catch (error) {
                console.log(error);

            }
        }
    }, [initialized, keycloak, content]);

    return (
        <div className="courseContent">
            <MDEditor.Markdown source={content} />

            {/* <td dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    );
}

export default HtmlViewer;