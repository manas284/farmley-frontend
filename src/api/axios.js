import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://farmley-api.onrender.com/api', // Replace with your backend URL
});

export default axiosInstance;
