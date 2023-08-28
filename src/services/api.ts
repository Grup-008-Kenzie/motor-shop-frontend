import axios from "axios"; 

export const apiCarsTable = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com",
    timeout: 25000
})

export const apiCep = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    timeout: 25000
})

export const apiLocal = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 25000
})