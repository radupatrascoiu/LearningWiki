import { ChatEngine } from 'react-chat-engine';
import { useKeycloak } from '@react-keycloak/web';
import ChatFeed from '../components//chat/ChatFeed';
import LoginForm from '../components/chat/LoginForm';
import '../styles/chat.css'

const Chat = () => {
    const { initialized, keycloak } = useKeycloak();
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (initialized && keycloak?.authenticated &&
        <ChatEngine
            height="100vh"
            projectID="28ab2168-4ea5-480c-97d2-2a7839e7b02b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default Chat;