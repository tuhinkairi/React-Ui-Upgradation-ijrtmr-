
import { createSlice } from '@reduxjs/toolkit';

interface PaginationState {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
}

const initialState: PaginationState = {
  current_page: 1,
  per_page: 10,
  total_items: 0,
  total_pages: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.current_page = action.payload;
    },
    setPerPage: (state, action) => {
      state.per_page = action.payload;
    },
    setTotalItems: (state, action) => {
      state.total_items = action.payload;
    },
    setTotalPages: (state, action) => {
      state.total_pages = action.payload;
    },
    resetPagination: () => initialState,
  },
});

export const { setCurrentPage, setPerPage, setTotalItems,setTotalPages,resetPagination } = paginationSlice.actions;
export default paginationSlice;
