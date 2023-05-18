import React from 'react'
import { Link } from 'react-router-dom'
import Person3Icon from '@mui/icons-material/Person3';

const Navigation = () => {
  return (
    <div className='flex mb-4 justify-between items-center bg-[#24292F] text-white h-20 text-lg sticky top-0 left-0 w-screen right-0 z-10 md:text-xl'>
      <div className='hover:text-yellow-600 mx-4'>
        <Link to="/" className='text-xl hidden md:block'>Song's Site</Link>
      </div>
      <div className='flex justify-evenly gap-2 md:gap-6'>
        <Link className='hover:text-yellow-600' to="/">Home</Link>
        <Link className='hover:text-yellow-600' to="/blogs">Blogs</Link>
        <Link className='hover:text-yellow-600' to="/subscribe">Subscribe</Link>
      </div>
      <a className='mx-4 hover:text-yellow-600' href='/login'>
        < Person3Icon fontSize="large" />
      </a>
    </div >
  )
}

export default Navigation