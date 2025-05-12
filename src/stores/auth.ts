import { createSlice } from '@reduxjs/toolkit';
import { removeSession } from '../utils/jwt';

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isInitialized = true;
      state.isAuthenticated = true;
      state.user = action?.payload;
    },
    logout: (state) => {
      removeSession();
      state.isInitialized = true;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
