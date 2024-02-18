import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.status = true; 
    },
    logout: (state, actions) => {
      state.status = false; 
    },
  },
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer
