import axios from "axios";


export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://panel.ijsreat.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.VITE_API_KEY || 'e1b3d61a14729026509aee1c291c8965f928ab08c5cc2562b46bc6962834983b',
        "Access-Control-Allow-Origin": "*",
    },
});