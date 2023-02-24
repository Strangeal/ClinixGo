import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { myApi } from '../myApi';

const initialState = {
  doctorsId: [],
  status: null,
};

export const fetchDocIdData = createAsyncThunk(
  'doctorsId/fetchDocIdData',
  async ({doctor_id}, thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/doctors/${doctor_id}`);
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
      .addCase(fetchDocIdData.pending, (state, action) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchDocIdData.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.doctorsId = action.payload;
      })
      .addCase(fetchDocIdData.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default doctorIdSlice.reducer;
