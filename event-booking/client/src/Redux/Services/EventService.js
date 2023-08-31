import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("event/getEvents", async () => {
  const { data } = await axios.get(
    "http://localhost:4000/events?_expand=location"
  );
  return data;
});
