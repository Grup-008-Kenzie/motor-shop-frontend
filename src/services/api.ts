import axios from "axios"; 

export const apiCarsTable = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com",
    timeout: 25000
})