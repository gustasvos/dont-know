import React, { useState } from "react"
import './RegisterScreen.scss'


function RegisterScreen(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">close</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default RegisterScreen