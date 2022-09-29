import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  }
});

export const { signin } = authSlice.actions;
export const selectAuth = (state) => state.user;

export default authSlice.reducer;
