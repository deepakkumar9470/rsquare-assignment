import React from 'react'
import { Link } from 'react-router-dom'

import  './login.scss'

const Login = () => {
  return (
    <div className='loginContainer'>
        <div className="left">
            <h2>Welcome back!</h2>
            <p>Please Enter your details.</p>
        </div>

        <div className="right">
            <h2>Begin your journey!</h2>
            <p>Get started with the best platform for design  </p>
            <form>

                <div className="inputs">
                    <label htmlFor="email">Emial Address</label>
                    <input type="text" name="email"/>
                </div>

                <div className="inputs">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </div>

                <div className="inputs">
                   
                    <input type="check"/>
                    <span>Remember me</span>
                </div>
                <button>Sign Up</button>

                <span>Already have an account? <Link className='link' to="/login"></Link></span>
             
            </form>
        </div>
    </div>
  )
}

export default Login