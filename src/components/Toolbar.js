import React from 'react'

const Toolbar = ( { messages, selectAll } ) => {
  // console.log( "in toolbar, messages", messages );
  let unreadCount = messages.filter( each => each.read === false ).length
  let selectedCount = messages.filter( each => each.selected === true ).length

  // console.log( "selectedCount", selectedCount );
  // console.log( "messages.length", messages.length );

  let selectedStatus = "fa fa-square-o"

  selectedCount > 0
    ? selectedStatus = "fa fa-minus-square-o"
    : selectedStatus

  selectedCount === messages.length
    ? selectedStatus = "fa fa-check-square-o"
    : selectedStatus

  //console.log( "unreadCount", unreadCount )

  return (<div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{unreadCount}
        </span>
        unread messages
      </p>

      <button className="btn btn-default">
        <i className={selectedStatus} onClick={selectAll.bind( null, messages, selectedCount )}></i>
      </button>

      <button className="btn btn-default">
        Mark As Read < /button>

        <button className="btn btn-default">
          Mark As Unread
        </button>
        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
    )
}

export default Toolbar