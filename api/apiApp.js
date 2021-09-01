import axios from "axios";

export const apiApp = axios.create({

    baseURL: `http://192.168.1.14:8000/api/v1/`,
    Headers: {
        'content-Type': 'aplication/json',
        'Accept': 'aplication/json',

    }
})