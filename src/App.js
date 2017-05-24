import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base from './base'

class App extends Component {
   componentWillMount() {
     base.syncState(
       'things',
       {
         context: this,
         state: 'things'
       }
     )
   }
   state = {
    things: {
      
    }
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
      checkbox: '',
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
  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div className="App">
        <Header />
        <div className="add">
        <AddThingButton addThing={this.addThing}/>
        {/*<textarea className="add-text" placeholder="Enter a Thing" value={this.state.thing} onChange={this.handleChange}></textarea>*/}
        </div>
        <ThingList things={this.state.things} {...actions} />
      </div>
    )
  }
}

export default App
