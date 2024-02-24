// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: false, // Assuming status indicates whether the user is authenticated or not
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.user = null;
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;