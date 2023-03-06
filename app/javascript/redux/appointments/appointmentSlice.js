import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import myApi from "../myApi";

const initialState = {
  appointments: [],
  status: null,
};

export const fetchAppointData = createAsyncThunk(
  "appointments/fetchAppointData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/appointments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppointData.pending, (state) => {
        const IsPending = state;
        IsPending.status = "pending";
      })
      .addCase(fetchAppointData.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = "fulfilled";
        IsFulfilled.appointments = action.payload;
      })
      .addCase(fetchAppointData.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = "rejected";
      });
  },
});

export default appointmentSlice.reducer;
