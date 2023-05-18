import React from 'react'
import Editor from '../components/Editor'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const New = () => {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate()

  function handleTitleChange(e) {
    setTitle(e.target.value)
  };

  function handleTopicChange(e) {
    setTopic(e.target.value)
  };

  function handleAbstractChange(e) {
    setAbstract(e.target.value)
  }

  function handleContentChange(value) {
    setContent(value);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
      Topic: topic,
      Title: title,
      Body: content,
      Image: image,
      Abstract: abstract
    }, { withCredentials: true })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));

    navigate("/blogs")
  };

  return (
    <div>
      <Editor content={content} handleContentChange={handleContentChange} />
      <div className='flex justify-center' id="submit-div">
        <form onSubmit={handleSubmit}>
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
          <input type="file" onChange={handleFileChange} />
          <button type="submit" className='bg-blue-600 px-8 py-2 text-xl rounded-md text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default New