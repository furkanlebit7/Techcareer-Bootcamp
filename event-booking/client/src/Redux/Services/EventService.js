import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("event/getEvents", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}/events?_expand=location`
  );
  return data;
});

export const fetchEventByUrl = createAsyncThunk(
  "event/getEventByUrl",
  async (url) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/events?_expand=eventType&_expand=location&eventUrl=${url}`
    );
    return data;
  }
);
export const fetchEventTypes = createAsyncThunk(
  "event/getEventTypes",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/eventTypes?_embed=events`
    );
    return data;
  }
);
