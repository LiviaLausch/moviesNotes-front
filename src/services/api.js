import axios from "axios";

export const api = axios.create({
    baseURL: 'https://moviesnotes-api-jkn0.onrender.com'
});