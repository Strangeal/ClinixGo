import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import { myApi } from '../api/myApi';

const myApi = "http://localhost:3000/api/v1/users"

const initialState = {
  appointments: [],
  status: null
}

export const fetchData = createAsyncThunk(
  'appointments/fetchData',
  async ({user_id, doctor_id}, thunkAPI) => {
    try {
      const response = await axios.get(`${myApi}/${user_id}/doctors/${doctor_id}/appointments`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const appSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchData.pending, (state, action) => {
      const IsPending = state;
      IsPending.status = 'pending'
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      const IsFulfilled = state;
      IsFulfilled.status = 'fulfilled';
      IsFulfilled.doctors = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchData.rejected, (state, action) => {
      const IsRejected = state;
      IsRejected.status = 'rejected'
    })
  },
});


export default appSlice.reducer;
