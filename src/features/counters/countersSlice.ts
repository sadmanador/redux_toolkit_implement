import { createSlice } from "@reduxjs/toolkit";

const countersSlice = createSlice({
  name: "counters",
  initialState: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ],
  reducers: {
    increment: (state, action) => {
      const counter = state.find((counter) => counter.id === action.payload);
      if (counter) {
        counter.value++;
      }
    },
    decrement: (state, action) => {
      const counter = state.find((counter) => counter.id === action.payload);
      if (counter) {
        counter.value--;
      }
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
