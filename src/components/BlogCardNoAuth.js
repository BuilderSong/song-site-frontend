import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TopicIcon from '@mui/icons-material/Topic';

const BlogCardNoAuth = ({ title, image, abstract, topic, time, id }) => {

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs overflow-hidden pt-2 h-fit">
      <img className="rounded-lg" src={image} alt={title} />
      <div className="m-2">
        <h4 className='leading-tight text-left'>{title}</h4>
      </div>
      <div className='flex justify-start gap-2 ml-2 mb-2'>
        <div><TopicIcon />{topic}</div>
        <div><AccessTimeIcon />{time}</div>
      </div>
      <p className='m-2 text-gray-700 text-sm leading-tight text-left'>{abstract}</p>
      <div className='flex justify-center gap-2 m-2'>
        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={`/blog/${id}`}>
          Read more
        </a>
      </div>
    </div>
  )
}

export default BlogCardNoAuth