import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { signin } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
