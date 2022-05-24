import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Button } from "@mui/material";
import { userApi } from "../../services/userApi";
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const HtmlEditor = ({ chapterId, contentState, setContentState }) => {
    const { initialized, keycloak } = useKeycloak();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(async () => {
        if (keycloak && initialized) {
            try {
                const response = await userApi.getChapter(keycloak?.token, chapterId);
                setContentState(response.data.content);
                setName(response.data.name);
                setDescription(response.data.description);
            } catch (error) {
                console.log(error);

            }
        }
    }, [initialized, keycloak]);

    const editChapterContent = async () => {
        try {
            const response = await userApi.editChapterContent(keycloak?.token, chapterId, name, description, contentState);
            console("POST RESPONSE = " + response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = () => {
        editChapterContent();
        navigate(`/courses/${name}/materiale/${chapterId}/view`)
    }

    return (
        <div className="container">
            <MDEditor
                value={contentState}
                onChange={setContentState}
            />
            <Button variant="contained" onClick={handleSave}>Save</Button>
        </div>
    );
}

export default HtmlEditor;
