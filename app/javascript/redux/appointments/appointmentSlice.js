import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { myApi } from '../myApi';

const initialState = {
  appointments: [],
  status: null,
};

export const fetchAppointData = createAsyncThunk(
  'appointments/fetchAppointData',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/appointments`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppointData.pending, (state, action) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchAppointData.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.appointments = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchAppointData.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default appointmentSlice.reducer;
