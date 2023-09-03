import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("event/getEvents", async () => {
  const { data } = await axios.get(
    "http://localhost:4000/events?_expand=location"
  );
  return data;
});

export const fetchEventByUrl = createAsyncThunk(
  "event/getEventByUrl",
  async (url) => {
    const { data } = await axios.get(
      `http://localhost:4000/events?_expand=eventType&_expand=location&eventUrl=${url}`
    );
    return data;
  }
);
export const fetchEventTypes = createAsyncThunk(
  "event/getEventTypes",
  async () => {
    const { data } = await axios.get(
      `http://localhost:4000/eventTypes?_embed=events`
    );
    return data;
  }
);
