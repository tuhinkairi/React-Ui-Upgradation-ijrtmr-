import type {  ThesisListingItem } from "../../../types/Api";
import { ThesisListing, type ThesisListingParams } from "../../axios/api/thesis";
import { setCurrentPage, setPerPage, setTotalItems, setTotalPages } from "../../store/Features/paginationSlice";
import { setThesisList } from "../../store/Features/ThesisSlice";
import type { AppDispatch } from "../../store/store";

export async function getThesisDetails(params: ThesisListingParams, setVolumes: (arg: ThesisListingItem[]) => void, reducer: AppDispatch) {
    // console.log("1")
    const res = await ThesisListing(params)
    // console.log("get details", res)
    reducer(setThesisList([...res.papersList]));
    reducer(setCurrentPage(res.current_page))
    reducer(setPerPage(res.per_page))
    reducer(setTotalItems(res.total_items)) //update total pages also
    reducer(setTotalPages(res.total_pages))

    setVolumes(res.papersList)

    // console.log("2")
    // reducer(setLoading(false));
}