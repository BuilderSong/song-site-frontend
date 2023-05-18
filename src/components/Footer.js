import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {

  return (
    <div className="bg-[#24292F] text-white h-20 text-md mb-0 w-screen">
      <div className='flex justify-center items-center py-2 gap-4 md:text-lg md:gap-6'>
        <a className='hover:text-yellow-600' href={process.env.REACT_APP_LINKEDIN_ADDRESS} target="_blank" rel='noreferrer'><LinkedInIcon fontSize='large' /></a>
        <a className='hover:text-yellow-600' href={process.env.REACT_APP_GITHUB_ADDRESS} target="_blank" rel='noreferrer'><GitHubIcon fontSize='large' /></a>
        <a className='hover:text-yellow-600' href={`mailto:${process.env.REACT_APP_EMAIL_ADDRESS}?subject=Hello There`}><MailIcon fontSize='large' /></a>
      </div>
      <div className='flex justify-center'>
        © Copyright 2023 Song Yu. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer