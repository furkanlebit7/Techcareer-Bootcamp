import { createSlice } from "@reduxjs/toolkit";
import { fetchEventByUrl, fetchEvents } from "../Services/EventService";

export const EventSlice = createSlice({
  name: "events",
  initialState: {
    allEvents: { data: [], status: "idle" },
    eventByUrl: { data: {}, status: "idle" },
  },
  reducers: {},
  extraReducers: {
    //Fetch All Events
    [fetchEvents.pending]: (state) => {
      state.allEvents.status = "loading";
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.allEvents.data = action.payload;
      state.allEvents.status = "succeeded";
    },
    [fetchEvents.rejected]: (state, action) => {
      state.allEvents.status = "failed";
    },
    //Fetch Event By Url
    [fetchEventByUrl.pending]: (state) => {
      state.eventByUrl.status = "loading";
    },
    [fetchEventByUrl.fulfilled]: (state, action) => {
      state.eventByUrl.data = action.payload[0];
      state.eventByUrl.status = "succeeded";
    },
    [fetchEventByUrl.rejected]: (state, action) => {
      state.eventByUrl.status = "failed";
    },
  },
});
export default EventSlice.reducer;

//Actions
// export const { changTheme } = WeatherSlice.actions;

//Selectors
export const getAllEvents = (state) => state.events.allEvents;
export const getEventByUrl = (state) => state.events.eventByUrl;
