import axios  from "axios";


const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'https://api.coingecko.com/api/v3/';


export default axiosInstance;