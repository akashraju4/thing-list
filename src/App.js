import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base, { auth } from './base'
import Login from './Login'
import Logout from './Logout'
import Stickies from 'react-stickies'
class App extends Component {
   state = {
    things: {}, 
    uid: null,
    notes: []
   }
   componentWillMount() {
      auth.onAuthStateChanged(
        (user) => {
          if (user) {
            this.authHandler({ user })
          }
        }
      )
   }

   setupThings = () => {
      this.ref = base.syncState(
       `${this.state.uid}/things`,
       {
         context: this,
         state: 'things'
       }
     )
   }

   authHandler = (authData) => {
      this.setState(
        { uid: authData.user.uid},
        this.setupThings
      )

   }

  thing = () => {
    return {
      id: `thing-${Date.now()}`,
      Name: '',
      checkbox: false,
      date: '',
      notes: true,
      color: ''
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing 
    this.setState({ things })
  }
  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })

  }
  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }
  Logout = () => {
    this.setState({ uid: null, things: {} })
    auth.signOut()
  }
  renderThings() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      addThing: this.addThing,
    }
    return (
      <div>
        <Logout Logout={this.Logout} />
        <AddThingButton addThing={this.addThing}/>
        {/*<textarea className="add-text" placeholder="Enter a Thing" value={this.state.thing} onChange={this.handleChange}></textarea>*/}
        <ThingList things={this.state.things} {...actions} />
        <Stickies notes={this.notes}/>
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() :  <Login authHandler={this.authHandler}/> }
      </div>
    )
  }
}

export default App
