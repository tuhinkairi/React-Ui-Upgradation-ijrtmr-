import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThesisIndexingItem, ThesisListingItem } from '../../../types/Api';

interface ThesisState {
    thesisList: ThesisListingItem[];
    ActiveThesis: ThesisListingItem | null;
    ThesisIndexingList: ThesisIndexingItem[];
    ActiveThesisIndex: ThesisIndexingItem | null;
}

const initialState: ThesisState = {
    thesisList: [],
    ActiveThesis: null,
    ThesisIndexingList: [],
    ActiveThesisIndex: null
};

const thesisSlice = createSlice({
    name: 'thesis',
    initialState,
    reducers: {
        setThesisList: (state, action: PayloadAction<ThesisListingItem[]>) => {
            state.thesisList = action.payload;
        },
        setActiveThesis: (state, action: PayloadAction<ThesisListingItem>) => {
            state.ActiveThesis = action.payload;
        },
        setThesisIndexingList: (state, action: PayloadAction<ThesisIndexingItem[]>) => {
            state.ThesisIndexingList = action.payload;
        },
        setActiveThesisIndex: (state, action: PayloadAction<ThesisIndexingItem>) => {
            state.ActiveThesisIndex = action.payload;
        },
        clearActiveThesis: (state) => {
            state.ActiveThesis = null;
        },
    },
});

export const {
    setThesisList,
    setActiveThesis,
    setThesisIndexingList,
    setActiveThesisIndex,
    clearActiveThesis,
} = thesisSlice.actions;

export default thesisSlice;