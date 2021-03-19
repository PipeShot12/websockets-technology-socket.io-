import React, { useState } from 'react';
import Login from "./components/login/Login"
import Chat from "./components/chat/Chat"
import {ContactsProvider} from '../src/context/contactsContext'
import { ConversationsProvider } from './context/conversationContext';
import useLocalStorage from './useLocalStorage';
import './App.css';

function App() {


  const [logged, setlogged] = useState(false);
  const [id, setid] = useLocalStorage("id")
  
  const isLogged = (user,state)=>{
    if(state){
      setlogged(state);
      setid(user.chatId); 
    }
    
  }
  if(logged) {
    return (
      <ContactsProvider>
        <ConversationsProvider>
          <Chat id={id}></Chat>
        </ConversationsProvider>
      </ContactsProvider>  
      )
  }else{
    return <Login login={isLogged}></Login>
  }
}

export default App;
