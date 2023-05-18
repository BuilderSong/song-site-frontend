import React from 'react'
import { validateUser } from '../controllers/users'
import Login from './Login'
import Blogs from './Blogs'
import { useState, useEffect } from 'react'

const LoginGeneral = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Validate = () => {
    validateUser()
      .then(response => setIsLoggedIn(true))
      .catch(error => console.log("no authenticated user logged in"))
  }

  useEffect(Validate, [])


  return (
    isLoggedIn ? <Blogs /> : <Login />
  )
}

export default LoginGeneral