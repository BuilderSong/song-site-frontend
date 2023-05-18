import React from 'react'
import Navigation from '../components/Navigation'
import HomePerson from '../images/homePerson.jpg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navigation />
      <div className='w-9/12 flex flex-col justify-center items-center mx-auto mb-3 gap-4 -z-50 md:flex-row'>
        <div className='flex flex-col justify-start gap-2 md:w-3/5'>
          <h2>Introducing Song's Site</h2>
          <p>
            Welcome to Song's Site, I created this blog site to share my blogs on full stack development, cloud architectures, and microservice design & implementation, and more. Please subscribe to this site if you wish to receive updates and stay informed about the content.
          </p>
        </div>
        <div className='-ml-4 '>
          <img src={HomePerson} alt='home-person-ai' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home