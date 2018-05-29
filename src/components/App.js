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
    let messageToUpdate = this.state.messages.filter( x => message.id === x.id )[ 0 ]

    console.log( "messageToUpdate", messageToUpdate )

    if ( messageToUpdate.starred ) {
      messageToUpdate.starred = false
    } else {
      messageToUpdate.starred = true
    }

    this.setState( {
      messages: [
        ...this.state.messages.slice( 0, message.id - 1 ),
        messageToUpdate,
        ...this.state.messages.slice( message.id )
      ]
    } )
  }

  toggleSelected = ( message ) => {
    let messageToUpdate = this.state.messages.filter( x => message.id === x.id )[ 0 ]
    let idToUpdate = this.state.messages.indexOf( message )

    console.log( "messageToUpdate", messageToUpdate )

    if ( messageToUpdate.selected ) {
      messageToUpdate.selected = false
    } else {
      messageToUpdate.selected = true
    }

    this.setState( {
      messages: [
        ...this.state.messages.slice( 0, idToUpdate ),
        messageToUpdate,
        ...this.state.messages.slice( idToUpdate + 1 )
      ]
    } )
  }

  selectAll = ( messages, selectedCount ) => {
    let messagesToUpdate = []
    if ( selectedCount === messages.length ) {
      messagesToUpdate = this.state.messages.map( x => {
        x.selected = false
        return x
      } )
    } else {
      messagesToUpdate = this.state.messages.map( x => {
        x.selected = true
        return x
      } )
    }
    this.setState( { messages: messagesToUpdate } )
  }

  markReadStatus = ( messages, readStatus ) => {
    // console.log( "messages", messages )
    let messagesToUpdate = []
    if ( readStatus === true ) {
      messagesToUpdate = this.state.messages.map( x => {
        if ( x.selected ) {
          x.read = true
        }
        return x
      } )
    } else {
      messagesToUpdate = this.state.messages.map( x => {
        if ( x.selected ) {
          x.read = false
        }
        return x
      } )
    }
    this.setState( { messages: messagesToUpdate } )
  }

  deleteMessages = ( messages ) => {
    let messagesToKeep = this.state.messages.filter( x => !x.selected )

    console.log( "messagesToKeep", messagesToKeep )

    this.setState( { messages: messagesToKeep } )
  }

  updateLabels = ( target, messages, status ) => {
    console.log( target )
    let messagesToUpdate = []

    if ( status === "add" ) {
      messagesToUpdate = this.state.messages.map( x => {
        console.log( "x.labels", x.labels.indexOf( String( target ) ) )
        if ( x.selected && x.labels.indexOf( String( target ) ) === -1 ) {
          x.labels.push( String( target ) )
          return x
        }
        return x
      } )
    } else {
      // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
      // var removed = myFish.splice(3, 1);

      messagesToUpdate = this.state.messages.map( x => {
        console.log( "x.labels", x.labels.indexOf( String( target ) ) )
        if ( x.selected && x.labels.indexOf( String( target ) ) === -1 ) {
          console.log( "remove label at index", x.labels.indexOf( String( target ) ) )
          x.labels = x.labels.splice( x.labels.indexOf( String( target ), 1 ) )
          return x
        }
        return x
      } )
    }

    this.setState( { messages: messagesToUpdate } )
  }

  //
  //   inputWasChanged = ( e ) => {
  //     this.setState( { greeting: e.target.value } )
  //   }

  render() {
    return ( <div className="App">
      <Toolbar messages={this.state.messages} selectAll={this.selectAll} markReadStatus={this.markReadStatus} deleteMessages={this.deleteMessages} updateLabels={this.updateLabels}/>
      <MessageList messages={this.state.messages} toggleStar={this.toggleStar} toggleSelected={this.toggleSelected} updateLabels={this.updateLabels}/>
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
