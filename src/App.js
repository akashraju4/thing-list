import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      thing: '',
      things: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.Add = this.Add.bind(this)
  }
 

  handleChange(ev) {
    this.setState({
      thing: ev.target.value
    })
  }
  Add(ev){
    const state = {...this.state}
    const thing = {
       text: this.state.thing
    }
    state.things.push(thing)
    state.thing = ''
    this.setState(thing, () => console.log(thing))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="add">
        <AddThingButton Add={this.Add}/>
        <textarea className="add-text" value={this.state.thing} onChange={this.handleChange}></textarea>
        </div>
        <ThingList things={this.state.things}/>
      </div>
    )
  }
}

export default App
