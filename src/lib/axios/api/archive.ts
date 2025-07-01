import type { ArchiveIndexVolume } from "../../../types/Api";
import { ArchiveIndexJsonUpdate } from "../../utils/other/jsonFormator";
import { axiosClient } from "../axios-client";

export const fetchArchive = async ():Promise<ArchiveIndexVolume[]> => {
    try {
        const response = await axiosClient.post("/archiveYearListing");
        // parse the response data
        const parsed = ArchiveIndexJsonUpdate(response.data["archives"])
        console.log(parsed)
        return parsed; //return years volumn issues
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}