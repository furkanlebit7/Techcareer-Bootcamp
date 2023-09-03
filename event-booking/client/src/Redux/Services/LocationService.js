import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocations = createAsyncThunk(
  "location/getLocations",
  async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/locations`);
    return data;
  }
);

export const fetchLocationById = createAsyncThunk(
  "location/getLocationById",
  async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/locations/${id}?_embed=events`
    );
    return data;
  }
);
