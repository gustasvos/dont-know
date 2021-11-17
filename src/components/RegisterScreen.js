import React, { useState } from "react"
import './RegisterScreen.scss'


function RegisterScreen(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <form>
                    <label>Register</label>
                    <input type="text" placeholder="Username" required></input>
                    <input type="password" placeholder="Password" required></input>
                    <input type="password" placeholder="Confirm password" required></input>
                    <button type="submit">Create account</button>
                </form>
                <button className="close-btn" onClick={() => props.setTrigger()}>close</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default RegisterScreen
