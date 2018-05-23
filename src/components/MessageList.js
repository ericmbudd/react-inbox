import React from 'react'
import Message from './Message'

const MessageList = ( { messages, toggleStar, toggleSelected } ) => ( <div className="collection">
  {messages.map( message => <Message key={message.id} message={message} toggleStar={toggleStar} toggleSelected={toggleSelected}/> )}
</div> )

export default MessageList
