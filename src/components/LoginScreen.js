import React, { useState } from 'react'
import RegisterScreen from './RegisterScreen'
import './LoginScreen.scss'

function LoginScreen() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="login-screen">
            <div className="login-form">
                <form>
                    <label>Sign In</label>
                    <input type="text" placeholder="Username"></input>

                    <input type="password" placeholder="Password"></input>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
            
            <p>New here?</p>
            <button className='login-btn' onClick={() => setShowPopup(true)}>Register</button>
            
            <RegisterScreen trigger={showPopup}>
                <h3>meu popup!!</h3>
            </RegisterScreen>
        </div>
    )
}

export default LoginScreen
