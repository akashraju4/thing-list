import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base, { auth } from './base'
import Login from './Login'
import Logout from './Logout'

class App extends Component {
   state = {
    things: {}, 
    uid: null
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
  
  // handleChange(ev) {
  //   this.setState({
  //     thing: ev.target.value
  //   })
  // }
  // Add(ev){
  //   const state = {...this.state}
  //   const thing = {
  //      text: this.state.thing
  //   }
  //   state.things.push(thing)
  //   state.thing = ''
  //   this.setState(thing)
  // }

  thing = () => {
    return {
      id: `thing-${Date.now()}`,
      Name: '',
      checkbox: false,
      date: '',
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
    }
    return (
      <div>
        <Logout Logout={this.Logout} />
        <AddThingButton addThing={this.addThing}/>
        {/*<textarea className="add-text" placeholder="Enter a Thing" value={this.state.thing} onChange={this.handleChange}></textarea>*/}
        <ThingList things={this.state.things} {...actions} />
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
