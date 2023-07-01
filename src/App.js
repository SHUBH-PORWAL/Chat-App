import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
         height ='100vh'
         projectID="efd1d88e-edd8-428e-8b54-41a47e77972b"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
    />
  )
}

export default App;
