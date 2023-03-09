import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import myApi from '../myApi';

const initialState = {};

export const updateDocStatus = createAsyncThunk(
  'docStatus/updateDocStatus',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `${myApi}/doctors/${payload.id}`,
        { doctor: payload.doctor },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const updateDoctorStatusSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateDocStatus.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(updateDocStatus.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(updateDocStatus.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default updateDoctorStatusSlice.reducer;
