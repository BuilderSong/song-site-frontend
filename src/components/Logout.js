import React from 'react'
import axios from 'axios'

const Logout = () => {
  const handleLogOut = () => {
    axios.post('/logout')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Logout