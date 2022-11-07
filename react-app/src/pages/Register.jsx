import React,{useState,useEffect} from 'react'
import './register.scss'
import {Link} from 'react-router-dom'

const Register = () => {

    const [inputs,setInputs] = useState({
        firstName:  "",
        lastName:  "",
        email:  "",
        phone:  "",
        password:  "",
        verified : "",
        setMsg : ""
    })


    const handleChange = (e) =>{
          setInputs((prev)=> ({...prev, [e.target.name] :  e.target.value}))
    }
    const handleRegister = (e) =>{
         e.preventDefault()
         try {
            
         } catch (error) {
            
         }
    }

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
               
                    <div className="inputs">
                        <label htmlFor="firstname">First Name</label>
                        <input value={inputs.firstName} 
                        onChange={handleChange}
                        type="text" name="firstname"/>
                    </div>

                    <div className=" value={inputs.firstName}s">
                        <label htmlFor="lastname">Last Name</label>
                        <input value={inputs.lastName} 
                        onChange={handleChange}
                        type="text" name="lastname"/>
                    </div>

                    <div className="inputs">
                        <label htmlFor="email">Email Address</label>
                        <input value={inputs.email} 
                        onChange={handleChange}
                        type="text" name="email"/>
                    </div>
                
                   <div className="inputs">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input value={inputs.phone} 
                        onChange={handleChange}
                        type="number" name="phonenumber"/>
                    </div>

                    <div className="inputs">
                        <label htmlFor="password">Password</label>
                        <input value={inputs.password} 
                        onChange={handleChange}
                        type="password" name="password"/>
                    </div>

                    <div className="inputs">
                   
                    <input value={inputs.verified} 
                    onChange={handleChange}
                    type="checkbox"/>
                    <span>By signing up, you agree to our User Agreement, Terms of Service, & Privacy Policy</span>
                      
                   </div>
                   <button onClick={handleRegister}>Sign Up</button>


                    <span>Already have an account? <Link className='link' to="/login"></Link></span>


               
            </form>
        </div>
    </div>
  )
}

export default Register