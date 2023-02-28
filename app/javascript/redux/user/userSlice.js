import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    username: '',
    email: '',
    gender: '',
    age: '',
    password: '',
    pending: true,
    success: false,
    error: false,
    errorMessage: '',
    message: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const userSelector = (state) => state.user;
export default userSlice.reducer;
