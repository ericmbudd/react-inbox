import React from 'react'

const Toolbar = ( { copyright } ) => {
  // console.log(copyright);
  return ( <footer className="toolbar">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Shop ALL THE THINGS</h5>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        &copy; {1999}
      </div>
    </div>
  </footer> )
}

export default Toolbar
