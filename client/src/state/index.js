import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

// createSlice() is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    //setMode changes the the mode of the web app
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

//Returned Value of createSlice Function is =>
// {
//   name : string,
//   reducer : ReducerFunction,
//   actions : Record<string, ActionCreator>,
//   caseReducers: Record<string, CaseReducer>.
//   getInitialState: () => State
// }

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
