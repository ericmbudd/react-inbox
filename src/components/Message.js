import React from 'react'

const MessageList = ( { messages } ) => ( <div className="collection">
  {messages.map( message => <Message key={message.id} message={message}/> )}
</div> )

export default MessageList
