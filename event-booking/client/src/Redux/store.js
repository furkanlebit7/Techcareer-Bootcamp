import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./Slices/EventSlice";

export const store = configureStore({
  reducer: {
    events: EventSlice,
  },
});
