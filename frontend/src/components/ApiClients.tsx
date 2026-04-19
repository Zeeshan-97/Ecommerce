import axios from "axios";

const apiClient = axios.create({
  baseURL:  axios.defaults.baseURL = import.meta.env.DEV
   ? "http://localhost:5000/"
   : "/",
   
    headers: {
      "Content-Type": "application/json",
    },
   withCredentials: true,
   timeout: 5000, // Set a timeout for requests (optional)
   validateStatus: (status) => {
     // Accept only 2xx status codes as successful responses
     return status >= 200 && status < 300;
   }
});

export default apiClient;