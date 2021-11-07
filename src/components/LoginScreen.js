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

            <p>
                New here?
                <a onClick={() => setShowPopup(true)} style={{cursor:'pointer'}}>
                    Register
                </a>
            </p>



            <RegisterScreen trigger={showPopup} setTrigger={setShowPopup} />
        </div>
    )
}

export default LoginScreen
