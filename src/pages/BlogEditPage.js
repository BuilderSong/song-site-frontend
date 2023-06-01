import Editor from "../components/Editor";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react'

const BlogEditPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [abstract, setAbstract] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const { body, topic, title, abstract } = state;
    setContent(body)
    setTitle(title)
    setTopic(topic)
    setAbstract(abstract)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleContentChange(value) {
    setContent(value);
  };

  function handleTitleChange(e) {
    setTitle(e.target.value)
  };

  function handleTopicChange(e) {
    setTopic(e.target.value)
  };

  function handleAbstractChange(e) {
    setAbstract(e.target.value)
  };

  function handleUpdate(e) {
    // e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
      Body: content,
      Title: title,
      Topic: topic,
      Abstract: abstract
    }, {
      withCredentials: true
    });
    navigate('/blogs');
  }

  return (
    <div>
      <Editor content={content} handleContentChange={handleContentChange} />
      <div className='flex justify-center' id="submit-div">
        <form onSubmit={handleUpdate}>
          <label>
            Title:
            <input type="text" name="Title" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Topic:
            <input type="text" name="Topic" value={topic} onChange={handleTopicChange} />
          </label>
          <label>
            Abstract:
            <input type="text" name="Abstract" value={abstract} onChange={handleAbstractChange} />
          </label>
          <button type="submit" className='bg-blue-600 px-8 py-2 text-xl rounded-md text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BlogEditPage