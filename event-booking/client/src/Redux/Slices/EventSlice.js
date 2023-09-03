import { createSlice } from "@reduxjs/toolkit";
import {
  fetchEventByUrl,
  fetchEventTypes,
  fetchEvents,
} from "../Services/EventService";

export const EventSlice = createSlice({
  name: "events",
  initialState: {
    allEvents: { data: [], status: "idle" },
    eventByUrl: { data: {}, status: "idle" },
    eventTypes: { data: [], status: "idle" },
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
    [fetchEvents.rejected]: (state) => {
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
    [fetchEventByUrl.rejected]: (state) => {
      state.eventByUrl.status = "failed";
    },

    //Fetch EventTypes
    [fetchEventTypes.pending]: (state) => {
      state.eventTypes.status = "loading";
    },
    [fetchEventTypes.fulfilled]: (state, action) => {
      state.eventTypes.data = action.payload;
      state.eventTypes.status = "succeeded";
    },
    [fetchEventTypes.rejected]: (state) => {
      state.eventTypes.status = "failed";
    },
  },
});
export default EventSlice.reducer;

//Selectors
export const getAllEvents = (state) => state.events.allEvents;
export const getEventByUrl = (state) => state.events.eventByUrl;
export const getEventTypes = (state) => state.events.eventTypes;
