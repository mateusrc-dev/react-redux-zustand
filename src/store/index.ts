import { configureStore, createSlice } from "@reduxjs/toolkit";

// here will have just a part of state, we can do this, created parts the global state (store)
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar redux", "Estudar Zustand"],
  reducers: {
    // here we are going to say what actions the interface can do in our state
    add: (state, action) => {
      console.log(state, action);
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
