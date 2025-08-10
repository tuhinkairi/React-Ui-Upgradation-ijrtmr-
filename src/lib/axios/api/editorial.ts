import type { EditorialMember } from "../../../types/Api";
import { axiosClient } from "../axios-client"

export const editorialFetch = async ():Promise<EditorialMember[]> => {
    try {
        const response = await axiosClient.post("/editorialBoard")
        // console.log("editoral", response.data.membersList[0])
        return response.data.membersList;
    } catch (error) {
        console.error('Error fetching index:', error);
        throw error;
    }
} 