import React, { useState } from 'react'
import './LoginScreen.scss'

function LoginScreen() {
    return(
        <div className="login-screen">
            <form>
                <label>Username</label>
                <input type="text"></input>

                <label>Password</label>
                <input type="password"></input>
                <button type="submit">Login</button>
            </form>
        </div>

        // <div className="login-screen">
        //     <Form>
        //         <Form.Group className="login-area" controlId="formLogin">
        //             <Form.Label>Username</Form.Label>
        //             <Form.Control type="text" placeholder="Enter login" />
        //         </Form.Group>

        //         <Form.Group className="password-area" controlId="formPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password"/>
        //         </Form.Group>

        //         <Button variant="primary" type="submit">
        //             Login
        //         </Button>
        //     </Form>
        // </div>
    )
}

export default LoginScreen