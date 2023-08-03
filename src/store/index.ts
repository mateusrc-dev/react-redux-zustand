import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// redux use the context api
// store is the global state
export const store = configureStore({
  reducer: {},
});

// function getState returns all state, and ReturnType get the format of state
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
