import axios from 'axios'

export const getPosts = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/posts`)
}

export const getSinglePost = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
}
