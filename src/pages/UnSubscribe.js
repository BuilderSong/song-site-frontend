import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UnSubscribe = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`${process.env.REACT_APP_API_URL}/subscribe`, {
      Email: email
    })
      .then(response => {
        console.log(response)
        alert('unsubcribed successfully')
        navigate('/blogs')
      })
      .catch(error => {
        console.log(error.response)
        alert('failed to unsubscribe, please check your email')
      })
  }

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center w-3/5">
        <p className="text-4xl font-semibold leading-9 text-center mb-10">Please type your email below to unsubscribe</p>
        <form className="flex flex-col text-xl my-4 items-start gap-1" onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label>
          <input className='rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="" id="email" name="email" />
          <button className='self-center rounded-md mt-6 bg-indigo-600 px-8 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type="submit">unSubscribe</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default UnSubscribe