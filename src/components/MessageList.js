import React from 'react'
import Message from './Message'

const MessageList = ( { messages } ) => ( <div className="collection">
  {messages.map( message => <Message key={message.id} message={message}/> )}
</div> )

export default MessageList
