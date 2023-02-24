import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { myApi } from '../myApi';

const initialState = {
  doctors: [],
  status: null,
};

export const fetchDocData = createAsyncThunk(
  'doctors/fetchDocData',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/doctors`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDocData.pending, (state, action) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchDocData.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.doctors = action.payload;
      })
      .addCase(fetchDocData.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default doctorSlice.reducer;
