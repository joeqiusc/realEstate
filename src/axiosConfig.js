import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Adjust this URL based on your backend configuration
});

export default instance;