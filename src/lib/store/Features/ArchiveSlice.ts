import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ActiveIndexArchive, ArchiveIndexVolume, ArchivePaperDetailProps } from "../../../types/Api";


interface initialArchiveState {
    indexPage: ArchiveIndexVolume[]
    activeIndexPage: ActiveIndexArchive | null
    papers: ArchivePaperDetailProps[];
    activePaper: ArchivePaperDetailProps | null;
}
const initialState: initialArchiveState = {
    indexPage: [],
    activeIndexPage: null,
    papers: [],
    activePaper: null,
}

export const ArchiveSlice = createSlice({
    name: "ArchiveSlice",
    initialState,
    reducers: {
        setPaperList: (state, action: PayloadAction<ArchivePaperDetailProps[]>) => {
            state.papers = action.payload;
        },
        setActivePaper: (state, action: PayloadAction<ArchivePaperDetailProps>) => {
            state.activePaper = action.payload;
        },
        clearActivePaper: (state) => {
            state.activePaper = null;
        },
        setArchiveIndexVolume: (state, action: PayloadAction<ArchiveIndexVolume[]>) => {
            state.indexPage = action.payload;
        },
        setActiveIndexVolume: (state, action: PayloadAction<ActiveIndexArchive>) => {
            state.activeIndexPage = action.payload;
        }
    }
})
export const { setArchiveIndexVolume, setActiveIndexVolume, clearActivePaper, setActivePaper, setPaperList } = ArchiveSlice.actions;
export default ArchiveSlice;
