import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ArchiveIndexVolume } from "../../../types/Api";

interface initialArchiveState {
    indexPage: ArchiveIndexVolume[]
    activeIndexPage:ArchiveIndexVolume|null
}
const initialState: initialArchiveState = {
    indexPage: [],
    activeIndexPage:null
}

export const ArchiveSlice = createSlice({
    name: "ArchiveSlice",
    initialState,
    reducers: {
        setArchiveIndexVolume: (state, action: PayloadAction<ArchiveIndexVolume[]>) => {
            state.indexPage = action.payload;
        },
        setActiveIndexVolume: (state, action: PayloadAction<ArchiveIndexVolume>) => {
            state.activeIndexPage = action.payload;
        }
    }
})
export const { setArchiveIndexVolume, setActiveIndexVolume } = ArchiveSlice.actions;
export default ArchiveSlice;
