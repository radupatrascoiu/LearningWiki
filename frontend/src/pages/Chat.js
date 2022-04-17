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
            projectID="9b00ac90-db16-4524-8f28-3169646e86b3"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default Chat;