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
      if (response.status === 201) {
        localStorage.setItem('token', data.token);
        return data;
      }
      const errors = data.errors.map((error) => error);
      return thunkAPI.rejectWithValue(errors);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({
    username, password
  }, thunkAPI) => {
    try {
      const response = await fetch(
        `${myApi}/auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password
            }
          }),
        },
      );
      const data = response.json();
      if(data.response === 200){
        localStorage.setItem("token", data.token);
        return data;
      }
      const error = data.errors;
      return thunkAPI.rejectWithValue(error);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {
    name: '',
    username: '',
    email: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        const newState = state.user;
        newState.pending = true;
        newState.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.success = true;
        newState.error = false;
        newState.name = action.payload.user.name;
        newState.email = action.payload.user.email;
        newState.username = action.payload.user.username;
        newState.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.error = true;
        const err = action.payload.map((e) => e);
        newState.errorMessage = err;
      })
    builder
      .addCase(loginUser.pending, (state) => {
        const newState = state.user;
        newState.pending = true;
        newState.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.success = true;
        newState.error = false;
        newState.username = action.payload.user.username;
        newState.message = action.payload.message;
        return newState;
      })
      .addCase(loginUser.rejected, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.error = true;
        newState.errorMessage = action.payload.errors;
        console.log("LOGINERROR>>>", action.payload)
      })
  },
});

export const userSelector = (state) => state.user;
export default userSlice.reducer;
