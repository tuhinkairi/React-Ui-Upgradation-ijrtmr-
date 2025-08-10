import type { SearchProp, ThesisIndexingItem, ThesisListingItem } from "../../../types/Api";
import { axiosClient } from "../axios-client";

export const fetchThesis = async (): Promise<ThesisIndexingItem[]> => {
    try {
        const res = await axiosClient.post("/thesisYearListing");
        // parse the response data
        // console.log(res.data.thesis)
        const modify = res.data.thesis.map((item: ThesisIndexingItem) => ({...item, issue: "0"}))
        return modify; //return years volumn issues
    } catch (error) {
        throw new Error(`Failed to fetch Thesis: ${error}`);
    }
}
// api/thesisDataListing

export interface ThesisListingParams {
    thesis_volume: number;
    thesis_year: number;
    page: number;
    per_page: number;
}

export const ThesisListing = async (params: ThesisListingParams):Promise<{
  papersList: ThesisListingItem[], current_page: number, per_page: number,
  total_items: number,
  total_pages: number
}> => {
    try {
        const res = await axiosClient.post("/thesisDataListing", params);  
        // console.log(res.data) //papersList
        return res.data; 
    } catch (error) {
        throw new Error(`Failed to fetch Thesis: ${error}`);
    }
}

export const FetchThesisPaperDetails = async (
    req: {
        thesis_id: number |string
    }
) => {
    try {
        const res = await axiosClient.post("/thesisDetails", req);
        // const modify = UpdateOneFetch(res.data.paperdetails)
        
        // console.log(res.data); //thesis
        return res.data.thesis;
    } catch (error) {
        console.log(error);
        throw new Error(`Failed to fetch Thesis: ${error}`);
    }
};
export const searchThesis = async (req: SearchProp) => {
    try {
        const res = await axiosClient.post("/searchThesis",
            req
        );
        return res.data
    }
    catch (error) {
        console.log(error)
        throw new Error(`Failed to fetch Thesis: ${error}`);
    }
}