import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://farm1-3w3d.onrender.com/', // Replace with your backend URL
});

export default axiosInstance;
