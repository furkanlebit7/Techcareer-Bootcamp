import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./Slices/EventSlice";
import LocationSlice from "./Slices/LocationSlice";

export const store = configureStore({
  reducer: {
    events: EventSlice,
    locations: LocationSlice,
  },
});
