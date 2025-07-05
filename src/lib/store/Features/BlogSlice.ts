import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Blog } from '../../../types/Api';


interface  BlogState {
    activeBlog: Blog | null,
    blogList: Blog[]
}

const initialState:BlogState = {
    activeBlog: null,
    blogList: []
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog: (state, action: PayloadAction<Blog>) => {
            state.activeBlog = action.payload;
        },
        setStoreBlogList: (state, action: PayloadAction<Blog[]>) => {
            state.blogList = action.payload;
        }
    }
});

export const { setBlog, setStoreBlogList } = blogSlice.actions;
export default blogSlice;