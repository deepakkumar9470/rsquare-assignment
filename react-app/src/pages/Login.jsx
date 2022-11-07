import React,{useState,useEffect,useContext} from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/context'

const Login = () => {
    const [inputs,setInputs] = useState({
        email:  "",
        password:  "",
      
    })

   
    const {login} = useContext(AuthContext)
   

    const handleChange = (e) =>{
          setInputs((prev)=> ({...prev, [e.target.name] :  e.target.value}))
    }
    const handleLogin = async (e) =>{
         e.preventDefault()
         try {
            const res = await login(inputs)
            setInputs(res.data)
         } catch (error) {
            console.log(error)
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
                        <label htmlFor="email">Email Address</label>
                        <input value={inputs.email} 
                        onChange={handleChange}
                        type="text" name="email"/>
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
                   <button onClick={handleLogin}>Login</button>


                    <span>Already have an account? <Link className='link' to="/register"></Link></span>


               
            </form>
        </div>
    </div>
  )
}

export default Login