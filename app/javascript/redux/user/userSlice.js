import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myApi from '../myApi';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({
    name, username, email, password,
  }, thunkAPI) => {
    try {
      const response = await fetch(
        `${myApi}/users`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              name,
              username,
              email,
              password,
            },
          }),
        },
      );
      const data = await response.json();
      console.log("DATA>>>", data);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.message)
    }
  }
);

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
