import { useState } from 'react';
import HtmlEditor from '../components/editContent/HtmlEditor';
import { useParams } from "react-router";

const EditChapterContent = () => {
    const { courseName, chapterId } = useParams();
    const [content, setContent] = useState('');

    return (
        <div>
            {/* <HtmlViewer contentState={content}></HtmlViewer> */}
            <HtmlEditor courseName={courseName} chapterId={chapterId} contentState={content} setContentState={setContent}></HtmlEditor>
        </div>
    );
}

export default EditChapterContent;