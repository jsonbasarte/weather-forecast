import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

export const store = configureStore({
  reducer: Reducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
