import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:8092/api/",
})

export default axiosApi;