import type { ContactUs } from "../../../types/Api";
import { axiosClient } from "../axios-client";

export const SendContactUs= async (data:ContactUs) => {
    try {
        const response = await axiosClient.post("/contact", data);
        // console.log(response.data)
        return response.data; 
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}