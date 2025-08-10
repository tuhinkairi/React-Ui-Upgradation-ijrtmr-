import type { ArchivePaperDetailProps } from "../../../types/Api";
import { ArchivePaperListting, type ArchivePaperListtingArg } from "../../axios/api/archive";
import { setPaperList } from "../../store/Features/ArchiveSlice";
import { setLoading } from "../../store/Features/loadingSlice";
import { setCurrentPage, setPerPage, setTotalItems, setTotalPages } from "../../store/Features/paginationSlice";
import type { AppDispatch } from "../../store/store";

export async function getArticalDetails(params: ArchivePaperListtingArg, setVolumes: (arg: ArchivePaperDetailProps[]) => void, reducer: AppDispatch) {
    reducer(setLoading(true));
    const res = await ArchivePaperListting(params)
    // console.log("artical details", res)
    reducer(setPaperList(res.papersList));
    // pagination
    reducer(setCurrentPage(res.current_page))
    reducer(setPerPage(res.per_page))
    reducer(setTotalItems(res.total_items)) //update total pages also
    reducer(setTotalPages(res.total_pages))
    setVolumes(res.papersList)
    // console.log("2")
    reducer(setLoading(false));
}