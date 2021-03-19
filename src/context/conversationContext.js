
import React, { useContext } from 'react'
import useLocalStorage from '../useLocalStorage'
import {useContacts} from './contactsContext'

const ConversationsContext = React.createContext()
   
export function useConversations() {
  return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
  const {contacts} = useContacts()
  
  const [conversations, setConversations] = useLocalStorage('conversation', [])
  function createConversation(recipients){
    setConversations(prevConversations => {
      return [...prevConversations,{recipients,messages:[]}]
    })
  }
  const formatedConversation = conversations.map((conversation)=>{
      const recipients = conversation.recipients.map((recipient)=>{
          const contact = contacts.find(contact=>{
              return contact.id === recipient
          })
          console.log(contact)
          const name = (contact && contact.name) || recipient
          return {id:recipient,name}
      })
      return {...conversation, recipients}
  })

  console.log(conversations)
  const value = {
      conversations:formatedConversation,
      createConversation
  }
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}