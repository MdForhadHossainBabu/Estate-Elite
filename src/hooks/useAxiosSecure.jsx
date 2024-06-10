import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosSecure = () => {

  // request interceptors using
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    console.log('request stop by interceptors', token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error)
  } )
 return axiosSecure;
};

export default useAxiosSecure;