import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}/login`,
      {
        Email: email,
        Password: password
      },
      {
        withCredentials: true,
        crossDomain: true
      })
      .then(response => {
        console.log(response)
        navigate('/blogs')
      })
      .catch(error => {
        console.log(error.response)
        alert('login failed')
      })
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navigation />
      <div className="flex flex-col justify-center items-center">
        <h2>Sign in (only for site owner)</h2>
        <form className="flex flex-col text-xl my-4 items-start gap-1" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input className='rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="" id="email" name="email" />
          <label className='mt-2' htmlFor="password">Password</label>
          <input className='rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" id="password" name="password" />
          <button className='self-center rounded-md mt-6 bg-indigo-600 px-8 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type="submit">Log In</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login