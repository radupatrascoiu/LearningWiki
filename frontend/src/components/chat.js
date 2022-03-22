import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import '../styles/chat.css'

const Chat = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return ( 
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