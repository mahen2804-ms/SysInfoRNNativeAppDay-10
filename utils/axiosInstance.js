import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://5abe-2402-8100-386a-4408-4cd0-8d08-6fe4-c54d.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Server down.. Please try after sometime.',
});

export default axiosInstance;
