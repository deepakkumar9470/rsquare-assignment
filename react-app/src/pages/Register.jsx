import React from 'react'

import './register.scss'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='registerContainer'>
        <div className="left">
            <h2>Welcome to Rsquare.</h2>
            <p>Lets get you all set up so start with your account and begin setting up your profile.</p>
        </div>

        <div className="right">
          
            <form>
                <h2>Begin your journey!</h2>
                <p>Get started with the best platform for design  </p>
               
                <div className="leftInputs">
                    <div className="inputs">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname"/>
                    </div>

                    <div className="inputs">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname"/>
                    </div>

                    <div className="inputs">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email"/>
                    </div>
                </div>

                <div className='rightInputs'>

                    <div className="inputs">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="number" name="phonenumber"/>
                    </div>

                    <div className="inputs">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                </div>

                <div className="inputs">
                   
                    <input type="check"/>
                    <span>By signing up, you agree to our User Agreement, Terms of Service, & Privacy Policy</span>
                </div>
                <button>Sign Up</button>

                <span>Already have an account? <Link className='link' to="/login"></Link></span>
             
            </form>
        </div>
    </div>
  )
}

export default Register