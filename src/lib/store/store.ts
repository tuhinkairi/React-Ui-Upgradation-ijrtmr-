import { configureStore } from '@reduxjs/toolkit';
import {  useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// Create the store
const store = configureStore({
    reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Create custom hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;