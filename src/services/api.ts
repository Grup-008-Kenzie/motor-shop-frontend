import axios from "axios"; 

export const api = axios.create({
    baseURL: "URl da Api",
    timeout: 25000
})