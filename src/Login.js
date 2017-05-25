import React from 'react'

import { auth, githubProvider } from './base'
import './Login.css'

const Login = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    return (
        <button 
            className="Login" 
            onClick={() => authenticate(githubProvider)}
        >
            Sign In With Github
        </button>   
    )
}





export default Login