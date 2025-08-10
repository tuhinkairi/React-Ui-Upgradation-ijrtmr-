import type { ConferenceArticleProps } from "../../../types/Api";
import { conference_detials, type conferenceDetailsType } from "../../axios/api/conference";
import { setConferenceArticleList } from "../../store/Features/conferenceDetailseSlice";
import { setCurrentPage, setPerPage, setTotalItems, setTotalPages } from "../../store/Features/paginationSlice";
import type { AppDispatch } from "../../store/store";

export async function getConferenceDetails(params: conferenceDetailsType, setVolumes: (arg: ConferenceArticleProps[]) => void, reducer: AppDispatch) {
    // console.log("1")
    
    const res = await conference_detials(params)
    // console.log("get details", res)
    reducer(setConferenceArticleList([ ...res.ConferenceList]));
    reducer(setCurrentPage(res.current_page))
    reducer(setPerPage(res.per_page))
    reducer(setTotalItems(res.total_items)) //update total pages also
    reducer(setTotalPages(res.total_pages))

    setVolumes(res.ConferenceList)

    // console.log("2")
    // reducer(setLoading(false));
}