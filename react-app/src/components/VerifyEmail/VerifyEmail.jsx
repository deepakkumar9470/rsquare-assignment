import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './verifyEmail.scss'
import axios from 'axios'
import success from '../../images/success.png'

const VerifyEmail = () => {
  const [isValidUrl, setISValidUrl] = useState(false)

  const { id, token } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:3000/api/auth/users/${id}/verify/${token}`
        const { data } = await axios.get(url)
        console.log(data)
        setISValidUrl(true)
        navigate('/login')
      } catch (error) {
        console.log(error)
        setISValidUrl(false)
      }
    }
    verifyEmailUrl()
  }, [id, token])


  return (
    <>
      {isValidUrl ? <>
        <div className="container">
          <img src={success} alt="success" />
          <h1>Email Verified Successfully</h1>
          <Link className='link' to="/login">
            <button className='green_btn'>Login</button>
          </Link>
        </div>
      </>
        :
        <h1>404 Not Found</h1>
      }
    </>
  )
}

export default VerifyEmail