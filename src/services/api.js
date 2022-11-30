
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const getInfo = async () => {
  const response = await axiosInstance.get('/')
  if (response.data) return response.data
  throw response
}
