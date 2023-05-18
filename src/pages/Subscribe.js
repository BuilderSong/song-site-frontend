import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  let isValid = false

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);

    if (!isValid) {
      alert('please input valid email');
      return
    }

    axios.post(`${process.env.REACT_APP_API_URL}/subscribe`, {
      Email: email,
      Name: name
    })
      .then(response => {
        console.log(response)
        alert('thank you for subscribing the newsletter')
        navigate('/blogs')
      })
      .catch(error => {
        console.log(error.response)
        alert('failed to subscribe')
      })
  }

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center w-3/5">
        <h1 className="text-4xl font-semibold leading-9 text-center">Don&apos;t miss out!</h1>
        <p className="text-lg leading-normal text-center mt-6">
          Welcome to subscribe to my newsletter. <br />
          The newsletter is sent when new blog is posted. <br />
          You can unsubscribe it anytime.
        </p>
        <form className="flex flex-col text-xl my-4 items-start gap-1" onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label>
          <input className='rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="" id="email" name="email" />
          <label className='mt-2' htmlFor="name">Your Name</label>
          <input className='rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="" id="name" name="name" />
          <button className='self-center rounded-md mt-6 bg-indigo-600 px-8 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type="submit">Subscribe</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Subscribe