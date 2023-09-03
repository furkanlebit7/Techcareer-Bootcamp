import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocations = createAsyncThunk(
  "location/getLocations",
  async () => {
    const { data } = await axios.get("http://localhost:4000/locations");
    return data;
  }
);

export const fetchLocationById = createAsyncThunk(
  "location/getLocationById",
  async (id) => {
    const { data } = await axios.get(
      `http://localhost:4000/locations/${id}?_embed=events`
    );
    return data;
  }
);
