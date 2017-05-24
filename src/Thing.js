import React, { Component } from 'react'
import Actions from './Actions'
import ContentEditable from 'react-contenteditable'
import './Thing.css'

class Thing extends Component {
    componentDidMount() {
        if (!this.nameInput.htmlEl.textContent){
            this.nameInput.htmlEl.focus()
        }
    }
    updateName = (ev) => {
        const {thing, saveThing} = this.props
        thing.Name = ev.target.value
        saveThing(thing)
    }

    changeOnEnter = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault()
            ev.target.blur()
        }
        
    }
    checkName = (ev) => {
        const {thing, saveThing} = this.props
        thing.checkbox = ev.target.checked
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
                    />        
                    <Actions thing={thing} removeThing={removeThing}/>
                </div>
            </li>
    )
  }   
}

export default Thing