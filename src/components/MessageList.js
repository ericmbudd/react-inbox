import React from 'react'
import Message from './Message'

const MessageList = ( { messages, toggleStar } ) => ( <div className="collection">
  {messages.map( message => <Message key={message.id} message={message} toggleStar={toggleStar}/> )}
</div> )

export default MessageList
