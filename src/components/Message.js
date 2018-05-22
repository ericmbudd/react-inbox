import React from 'react'

const Message = ( { message } ) => {
  console.log( "message", message );

  let read = message.read
    ? 'row message read'
    : 'row message unread'

  let starred = "star fa " + (
    message.starred
    ? 'fa-star-o'
    : 'fa-star')

  return ( <div className={read}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox"/>
        </div>
        <div className="col-xs-2">
          <i className={starred}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      <a href="#">
        {message.subject}
      </a>
    </div>
  </div> )
}
export default Message
