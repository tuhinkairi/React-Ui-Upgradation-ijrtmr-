import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://panel.ijsreat.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'e1b3d61a14729026509aee1c291c8965f928ab08c5cc2562b46bc6962834983b',
        "access-control-allow-origin": "*",
    },
});