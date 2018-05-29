import React from 'react'
import Message from './Message'

// const MessageList = ( { messages, toggleStar, toggleSelected } ) => ( <div className="collection">
//   {messages.map( message => <Message key={message.id} message={message} toggleStar={toggleStar} toggleSelected={toggleSelected}/> )}
// </div> )

const MessageList = ( { messages, toggleStar, toggleSelected, updateLabels } ) => {
  return ( <div className='collection'>
    {
      messages.map( ( message, i ) => {
        //console.log( `>>> ${ message.id }` )
        // return <p key={message.id}>{message.id}</p>
        return <Message key={i} message={message} toggleStar={toggleStar} toggleSelected={toggleSelected} updateLabels={updateLabels}/>
      } )
    }
  </div> )
}

export default MessageList
