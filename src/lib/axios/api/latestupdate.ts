import { axiosClient } from "../axios-client";

export type latestUpdate ={
	latest_update_id: 1,
	input1_data: string,
	input1_link: string | null,
	input2_data: string,
	input2_link: string | null,
	input3_data: string,
	input3_link: string | null
}
export const fetchUpdates = async ():Promise<latestUpdate> => {
    try {
        const response = await axiosClient.post("/latestUpdate");
        console.log(response.data.latestUpdates[0])
        return response.data.latestUpdates[0]; 
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}