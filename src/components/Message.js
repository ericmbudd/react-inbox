import React from 'react'

const Message = ( { message, toggleStar } ) => {

  let read = message.read
    ? 'row message read'
    : 'row message unread'

  let starred = "star fa " + (
    message.starred
    ? 'fa-star-o'
    : 'fa-star')

  let selected = message.selected
    ? "checked"
    : ''

  if ( message.selected ) {
    read = 'row message selected'
  }

  return ( <div className={read}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" checked={selected}/>
        </div>
        <div className="col-xs-2">
          <i className={starred} onClick={toggleStar.bind( null, message )}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      {
        message
          .labels
          .map( label => <span className="label label-warning">{label}</span> )
      }
      <a href="#">
        {message.subject}
      </a>
    </div>
  </div> )
}
export default Message
