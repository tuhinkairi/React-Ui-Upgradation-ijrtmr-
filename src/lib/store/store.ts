import { configureStore } from '@reduxjs/toolkit';
import {  useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import conferenceSlice from './Features/conferenceSlice';
import conferenceArticleSlice from './Features/conferenceDetailseSlice';

// Create the store
const store = configureStore({
    reducer: {
        conference: conferenceSlice.reducer,
        conferenceArtical: conferenceArticleSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create custom hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;