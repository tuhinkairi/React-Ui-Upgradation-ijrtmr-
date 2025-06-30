// store/Features/conferenceArticleSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ConferenceArticleProps } from "../../../types/Api";

interface ConferenceArticleState {
  selectedArticle: ConferenceArticleProps | null;
  articleList: ConferenceArticleProps[];
}

const initialState: ConferenceArticleState = {
  selectedArticle: null,
  articleList: [],
};

const conferenceArticleSlice = createSlice({
  name: "conferenceArticle",
  initialState,
  reducers: {
    setConferenceArticleList: (state, action: PayloadAction<ConferenceArticleProps[]>) => {
      state.articleList = action.payload;
    },
    addConferenceArticle: (state, action: PayloadAction<ConferenceArticleProps>) => {
      state.articleList.push(action.payload);
    },
    setActiveConferenceArticle: (state, action: PayloadAction<ConferenceArticleProps>) => {
      state.selectedArticle = action.payload;
    },
    clearSelectedConferenceArticle: (state) => {
      state.selectedArticle = null;
    },
    clearArticleConferenceList: (state) => {
      state.articleList = [];
    },
  },
});

export const {
  setConferenceArticleList,
  addConferenceArticle,
  setActiveConferenceArticle,
  clearSelectedConferenceArticle,
  clearArticleConferenceList
} = conferenceArticleSlice.actions;

export default conferenceArticleSlice;