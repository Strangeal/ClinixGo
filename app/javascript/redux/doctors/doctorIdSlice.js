import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import myApi from '../myApi';

const initialState = {
  doctorsId: [],
  status: null,
};

export const fetchDocIdData = createAsyncThunk(
  'doctorsId/fetchDocIdData',
  async ({ doctorId }, thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/doctors/${doctorId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const doctorIdSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDocIdData.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchDocIdData.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.doctorsId = action.payload;
      })
      .addCase(fetchDocIdData.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default doctorIdSlice.reducer;
