import axios from "axios";

console.log("import.meta.env.VITE_API_URL",import.meta.env.VITE_API_URL)
const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export default axiosApi;