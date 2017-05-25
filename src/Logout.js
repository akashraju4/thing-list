import React from 'react'

import { auth, githubProvider } from './base'
import './Logout.css'


const Logout = ({ Logout }) => {
    return (
        <button className="Logout" onClick={Logout}>
            Sign Out
        </button>   
    )
}





export default Logout