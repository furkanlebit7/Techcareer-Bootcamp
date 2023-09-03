import { createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "../Services/LocationService";

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
  },
});
export default LocationSlice.reducer;

//Selectors
export const getAllLocations = (state) => state.locations.allLocations;
export const getLocationById = (state) => state.locations.locationById;
