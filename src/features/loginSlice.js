import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUsersData: "",
  loginUsersError: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getloginUsersData: (state, action) => {
      state.loginUsersData = action.payload;
    },
    getloginUsersError: (state, action) => {
      state.loginUsersData = action.payload;
    },
  },
});

export const { getloginUsersData, getloginUsersError } = loginSlice.actions;
export default loginSlice.reducer;
