import React, { Component } from 'react';
import logo from '../logo.svg';
import '../index.css';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
import seed from '../data/seed.json';

console.log( seed )

class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      messages: seed
    }
  }

  toggleStar = ( message ) => {
    let indexToUpdate = this
      .state
      .messages
      .filter( x => message.id === x.id )[ 0 ]

    console.log( "indexToUpdate", indexToUpdate )

    if ( indexToUpdate.starred ) {
      indexToUpdate.starred = false
    } else {
      indexToUpdate.starred = true
    }

    this.setState( {
      messages: [
        ...this
          .state
          .messages
          .slice( 0, message.id - 1 ),
        indexToUpdate,
        ...this
          .state
          .messages
          .slice( message.id )
      ]
    } )
  }

  toggleSelected = ( message ) => {
    let indexToUpdate = this
      .state
      .messages
      .filter( x => message.id === x.id )[ 0 ]

    console.log( "indexToUpdate", indexToUpdate )

    if ( indexToUpdate.selected ) {
      indexToUpdate.selected = false
    } else {
      indexToUpdate.selected = true
    }

    this.setState( {
      messages: [
        ...this
          .state
          .messages
          .slice( 0, message.id - 1 ),
        indexToUpdate,
        ...this
          .state
          .messages
          .slice( message.id )
      ]
    } )
  }

  //
  //   inputWasChanged = ( e ) => {
  //     this.setState( { greeting: e.target.value } )
  //   }

  render() {
    return ( <div className="App">
      <Toolbar/>
      <MessageList messages={this.state.messages} toggleStar={this.toggleStar} toggleSelected={this.toggleSelected}/>
    </div> );
  }
}

// class App extends Component {
//   render() {
//     return ( <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit
//         <code>src/App.js</code>
//         and save to reload.
//       </p>
//     </div> );
//   }
// }

export default App;
