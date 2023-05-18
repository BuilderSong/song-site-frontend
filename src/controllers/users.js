import axios from 'axios'

export const validateUser = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/validate`, {
    withCredentials: true
  })
}
