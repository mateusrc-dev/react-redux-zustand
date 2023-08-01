import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// here will have just a part of state, we can do this, created parts the global state (store)
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar redux", "Estudar Zustand"],
  reducers: {
    // here we are going to say what actions the interface can do in our state
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

// redux use the context api
// store is the global state
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

// function getState returns all state, and ReturnType get the format of state
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
