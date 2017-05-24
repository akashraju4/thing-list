import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     thing: '',
  //     things: [],
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   this.Add = this.Add.bind(this)
  // }
   state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
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
  render() {
    return (
      <div className="App">
        <Header />
        <div className="add">
        <AddThingButton addThing={this.addThing}/>
        {/*<textarea className="add-text" placeholder="Enter a Thing" value={this.state.thing} onChange={this.handleChange}></textarea>*/}
        </div>
        <ThingList things={this.state.things} saveThing={this.saveThing}/>
      </div>
    )
  }
}

export default App
