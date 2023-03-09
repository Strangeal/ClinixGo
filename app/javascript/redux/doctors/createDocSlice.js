import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import myApi from '../myApi';

const initialState = {
  status: null,
};

export const createDoc = createAsyncThunk(
  'create/createDoctor',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${myApi}/doctors`,
        { doctor: payload },
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

const createDocSlice = createSlice({
  name: 'newDoctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDoc.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(createDoc.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(createDoc.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default createDocSlice.reducer;
