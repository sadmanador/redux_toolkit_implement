import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";

const store = configureStore({
  reducer: { counters: countersReducer },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
