import React from 'react';
import { useState, useEffect, useRef } from 'react';
import BlogCard from '../components/BlogCard';
import BlogCardNoAuth from '../components/BlogCardNoAuth';
import { validateUser } from '../controllers/users';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getPosts } from '../controllers/posts';


const Blogs = () => {
  const [posts, setPosts] = useState([])
  const BlogCards = useRef([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const Validate = () => {
    validateUser()
      .then(response => setIsLoggedIn(true))
      .catch(error => console.log("no authenticated user"))
  }


  const GetPosts = () => {
    getPosts()
      .then(response => {
        // console.log(response.data.posts)
        setPosts([...posts, ...response.data.posts])
      })
      .catch(error => console.log(error))
  }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(GetPosts, [])
  useEffect(Validate, [])

  // console.log(posts)
  // console.log(isLoggedIn)

  if (isLoggedIn) {
    BlogCards.current = []
    const Cards = posts.map(post => {
      return <BlogCard key={post.ID} title={post.Title} image={`data:image/jpeg;base64,${post.Image}`} abstract={post.Abstract} topic={post.Topic} time={post.CreatedAt.slice(0, 10)} body={post.Body} id={post.ID} />
    })

    BlogCards.current = [...BlogCards.current, ...Cards]
  } else {
    const Cards = posts.map(post => {
      return <BlogCardNoAuth key={post.ID} title={post.Title} image={`data:image/jpeg;base64,${post.Image}`} abstract={post.Abstract} topic={post.Topic} time={post.CreatedAt.slice(0, 10)} id={post.ID} />
    })

    BlogCards.current = [...BlogCards.current, ...Cards]
  }

  // console.log(BlogCards)


  if (posts.length !== 0) {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <Navigation />
        <div className='grid grid-cols-1 gap-2 mx-4 mb-4 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {BlogCards.current}
        </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        loading....
      </div>
    )
  }
}

export default Blogs