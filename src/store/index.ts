import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { player } from "./slices/player";

// redux use the context api
// store is the global state
export const store = configureStore({
  reducer: {
    player: player,
  },
});

// function getState returns all state, and ReturnType get the format of state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
