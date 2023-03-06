import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import myApi from "../myApi";

const initialState = {
  // bookAppointment: null,
  status: null,
};

export const bookAppointment = createAsyncThunk(
  "bookAppointment/bookAppointment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${myApi}/appointments`,
        {
          appointment: payload,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const bookAppointmentSlice = createSlice({
  name: "bookAppointment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(bookAppointment.pending, (state) => {
        const IsPending = state;
        IsPending.status = "pending";
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = "fulfilled";
      })
      .addCase(bookAppointment.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = "rejected";
      });
  },
});

export default bookAppointmentSlice.reducer;
