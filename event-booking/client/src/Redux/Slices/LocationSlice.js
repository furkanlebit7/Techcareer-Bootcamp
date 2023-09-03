import { createSlice } from "@reduxjs/toolkit";
import { fetchLocationById, fetchLocations } from "../Services/LocationService";

export const LocationSlice = createSlice({
  name: "locations",
  initialState: {
    allLocations: { data: [], status: "idle" },
    locationById: { data: {}, status: "idle" },
  },
  reducers: {},
  extraReducers: {
    //Fetch All Locations
    [fetchLocations.pending]: (state) => {
      state.allLocations.status = "loading";
    },
    [fetchLocations.fulfilled]: (state, action) => {
      state.allLocations.data = action.payload;
      state.allLocations.status = "succeeded";
    },
    [fetchLocations.rejected]: (state) => {
      state.allLocations.status = "failed";
    },

    //Fetch Location By Id
    [fetchLocationById.pending]: (state) => {
      state.locationById.status = "loading";
    },
    [fetchLocationById.fulfilled]: (state, action) => {
      state.locationById.data = action.payload;
      state.locationById.status = "succeeded";
    },
    [fetchLocationById.rejected]: (state) => {
      state.locationById.status = "failed";
    },
  },
});
export default LocationSlice.reducer;

//Selectors
export const getAllLocations = (state) => state.locations.allLocations;
export const getLocationById = (state) => state.locations.locationById;
