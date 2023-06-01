import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TopicIcon from '@mui/icons-material/Topic';

const BlogCard = ({ title, image, abstract, topic, time, id, body }) => {

  const navigate = useNavigate()

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, { withCredentials: true })
      .then(response => {
        console.log(response);
        navigate("/blogs")
      })
      .catch(error => console.log(error))
  }

  const handleEdit = (body, id, topic, title, abstract) => {
    const path = `/edit/${id}`
    navigate(path, {
      state: {
        body: body,
        topic: topic,
        title: title,
        abstract: abstract
      }
    })
  }

  const handleSend = (id, topic, title, abstract) => {
    axios.post(`${process.env.REACT_APP_API_URL}/sendEmails`,
      {
        ID: id,
        Topic: topic,
        Title: title,
        Abstract: abstract
      },
      { withCredentials: true })
      .then(response => {
        console.log(response);
        navigate("/blogs")
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs overflow-hidden pt-2 h-fit hover:shadow-2xl" onClick={(e) => navigate(`/blog/${id}`) && e.stopPropagation()}>
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
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => handleSend(id, topic, title, abstract)}>
          Send Newsletter
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => handleEdit(body, id, topic, title, abstract)}>
          Update
        </button>
      </div>
    </div>
  )
}

export default BlogCard