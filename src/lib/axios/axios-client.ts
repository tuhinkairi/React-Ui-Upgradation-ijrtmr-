import axios from "axios";


export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.VITE_API_KEY,
        "Access-Control-Allow-Origin": "*",
        
    },
});