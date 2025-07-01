
import { createSlice } from '@reduxjs/toolkit';

interface PaginationState {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
}

const initialState: PaginationState = {
  current_page: 1,
  per_page: 5,
  total_items: 16,
  total_pages: 4,
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
      state.total_pages = Math.ceil(state.total_items / action.payload);
    },
    setTotalItems: (state, action) => {
      state.total_items = action.payload;
      state.total_pages = Math.ceil(action.payload / state.per_page);
    },
  },
});

export const { setCurrentPage, setPerPage, setTotalItems } = paginationSlice.actions;
export default paginationSlice;
