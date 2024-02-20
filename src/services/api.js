import axios from "axios";

export const api = axios.create({
    //baseURL: "http://localhost:3333", //local environment
    baseURL: "https://foodexplorer-maxtr.onrender.com",
    withCredentials: true
})