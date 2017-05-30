import React from 'react'
import './Thing.css'


const Actions = ({thing, removeThing, changeColor}) => {
    return (
        <span className="actions">
        <button className="remove"  onClick={() => removeThing(thing)}>
            <i className="fa fa-trash-o"></i>
        </button>
         <button className="highlight"  onClick={() => changeColor(thing)}>
            <i className="fa fa-star"></i>
        </button>
        <button className="move"  onClick={() => removeThing(thing)}>
            <i className="fa fa-bars"></i>
        </button>
        </span>
    )
}

export default Actions