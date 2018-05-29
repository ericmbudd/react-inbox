import React from 'react'

const Message = ( { message, toggleStar, toggleSelected } ) => {

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
    if ( message.read ) {
      read = 'row message selected read'
    } else {
      read = 'row message selected unread'
    }

  }

  return ( <div className={read}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" checked={selected} onChange={toggleSelected.bind( null, message )}/>
        </div>
        <div className="col-xs-2">
          <i className={starred} onClick={toggleStar.bind( null, message )}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      {message.labels.map( label => <span className="label label-warning">{label}</span> )}
      <a href="#">
        {message.subject}
      </a>
    </div>
  </div> )
}
export default Message
