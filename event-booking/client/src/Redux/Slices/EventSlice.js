import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "../Services/EventService";

export const EventSlice = createSlice({
  name: "event",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    //Fetch City
    [fetchEvents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log(action);
      state.status = "succeeded";
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default EventSlice.reducer;

//Actions
// export const { changTheme } = WeatherSlice.actions;

//Selectors
// export const getDataStatus = (state) => state.weather.fetchDataStatus;
