import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-maxtr.onrender.com",
    withCredentials: true
})