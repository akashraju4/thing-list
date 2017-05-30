import React, { Component } from 'react'
import Actions from './Actions'
import ContentEditable from 'react-contenteditable'
import './Thing.css'

class Thing extends Component {
    componentDidMount() {
        const {thing} = this.props
        if (!this.nameInput.htmlEl.textContent){
            this.nameInput.htmlEl.focus()
        }
    }
    updateName = (ev) => {
        const {thing, saveThing} = this.props
        thing.Name = ev.target.value
        saveThing(thing)
        // if(ev.target.value === '')
        // {
        //     alert('This is required!')
        // }
    }

    changeOnEnter = (ev) => {
        const {addThing} = this.props
        if (ev.key === 'Enter') {
            ev.preventDefault()
            ev.target.blur()
            addThing()
        }
        
    }
    checkName = (ev) => {
        const {thing, saveThing} = this.props
        thing.checkbox = ev.target.checked
        saveThing(thing)     
    }
    updateDate = (ev) => {
        const {thing, saveThing} = this.props
        thing.date = ev.target.value
        saveThing(thing) 
    }
    changeColor = (ev) => {
        const {thing, saveThing} = this.props
        thing. 
        saveThing(thing)
    }
    
    render() {
        const {thing, removeThing} = this.props
        return (
            
            <li className="Thing">
                <input 
                    type="checkbox" 
                    onClick={this.checkName}
                    defaultChecked={thing.checkbox}
                />
                <div className="details">
                    <ContentEditable 
                        className="name" 
                        html={thing.Name} 
                        onChange={this.updateName} 
                        onKeyPress={this.changeOnEnter}
                        ref={input => this.nameInput = input}
                        disabled={thing.disabled}                        
                    />
                    <input 
                        className='Date'
                        type="date" 
                        onChange={this.updateDate}
                        defaultValue={thing.date} 
                    />        
                    <Actions thing={thing} removeThing={removeThing} changeColor={this.changeColor}/>
                </div>
            </li>
    )
  }   
}

export default Thing