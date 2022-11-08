import { useState, useEffect, createContext } from 'react'

import axios from 'axios'

const url = `http://localhost:5000/api/auth`
export const AuthContext = createContext()



export const AuthContextProvider = ({ children }) => {

  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )


  const login = async (inputs) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', inputs, {
        withCredentials: true
      })
      // return res.data
      setcurrentUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}