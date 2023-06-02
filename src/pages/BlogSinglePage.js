import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/BlogSingle.css'
import 'react-quill/dist/quill.snow.css';
import { getSinglePost } from '../controllers/posts';
import hljs from 'highlight.js';
import '../styles/dracula.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TopicIcon from '@mui/icons-material/Topic';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


function BlogSinglePage() {

  const [post, setPost] = useState([]);
  const { id } = useParams();

  const preload_func = () => {
    getSinglePost(id)
      .then(response => {
        if (response.data.post) {
          setPost(response.data.post)
        } else {
          alert('failed to load post')
        }
      });
  }

  const styleCodeArea = () => {
    if (document.querySelectorAll('.ql-syntax')) {
      var codeBlocks = document.querySelectorAll('.ql-syntax')
      for (let i = 0; i < codeBlocks.length; i++) {
        hljs.highlightElement(codeBlocks[i])
      }
    } else {
      setTimeout(() => {
        var codeBlocks = document.querySelectorAll('.ql-syntax')
        for (let i = 0; i < codeBlocks.length; i++) {
          hljs.highlightElement(codeBlocks[i])
        }
      }, 300);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(preload_func, [])
  useEffect(styleCodeArea, [post])

  if (post.Title) {
    return (
      <div>
        <Navigation />
        <h1 className="flex justify-start mx-1 my-5 md:text-2xl md:justify-center lg:text-3xl">{post.Title}</h1>
        <div className='flex justify-start gap-6 mx-2 mb-4 md:justify-center'>
          <span className='flex items-center gap-2'><TopicIcon /> <p className='text-lg'>{post.Topic}</p></span>
          <span className='flex items-center gap-2'><AccessTimeIcon /> <p className='text-lg'>{post.CreatedAt.slice(0, 10)}</p></span>
        </div>
        <div className='mx-2 mb-10 md:mx-10 lg:mx-12' >
          <div dangerouslySetInnerHTML={{ __html: post.Body }} />
        </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }

}

export default BlogSinglePage