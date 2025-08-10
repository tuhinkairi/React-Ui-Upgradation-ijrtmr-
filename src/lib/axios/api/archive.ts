import type { ArchiveIndexVolume, ArticleSuggestionProp, SearchProp } from "../../../types/Api";
import { UpdateOneFetch } from "../../utils/archive/UpdateOneFetch";
import { ArchiveIndexJsonUpdate } from "../../utils/other/jsonFormator";
import { axiosClient } from "../axios-client";

export const fetchArchive = async (): Promise<ArchiveIndexVolume[]> => {
    try {
        const response = await axiosClient.post("/archiveYearListing");
        // parse the response data
        const parsed = ArchiveIndexJsonUpdate(response.data["archives"])
        // console.log(parsed)
        return parsed; //return years volumn issues
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}
export const fetchArchiveNormal = async () => {
    try {
        const response = await axiosClient.post("/archiveYearListing");
        // parse the response data
        const parsed =response.data["archives"]
        // console.log(parsed)
        return parsed; //return years volumn issues
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}
export type ArchivePaperListtingArg = {
    year: number,
    volume: number,
    issue: number,
    page: number,
    per_page: number

}
export const ArchivePaperListting = async (req: ArchivePaperListtingArg) => {
    try {
        const res = await axiosClient.post("/archivePaperListing",
            req
        );
        // console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
export const SuggestedArchivePost = async (req: ArticleSuggestionProp) => {
    try {
        const res = await axiosClient.post("/archiveSuggestions",
            req
        );
        // console.log(res.data.suggestions)
        return res.data.suggestions
    }
    catch (error) {
        console.log(error)
    }
}


export const FetchActiveArticle = async (
  req: { paperid: string }
) => {
  try {
    const res = await axiosClient.post("/archivePaperNew", req);
    const modify = UpdateOneFetch(res.data.paperdetails)
    
    // console.log(modify);
    return modify;
  } catch (error) {
    console.log(error);
  }
};



export const searchArchive = async (req: SearchProp) => {
    try {
        const res = await axiosClient.post("/searchArchive",
            req
        );
        // console.log(res.data.papersList)
        return res.data.papersList
    }
    catch (error) {
        console.log(error)
    }
}