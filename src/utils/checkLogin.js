import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  userPresent: false,
};

const checkUserSlice = createSlice({
  name: "isUserLogin",
  initialState,
  reducers: {
    setUserPresentTrue: (state) => {
      state.userPresent = true;
    },
    setUserPresentFalse: (state) => {
      state.userPresent = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Export actions
export const { setUserPresentTrue, setUserPresentFalse, setToken } =
  checkUserSlice.actions;

// Export reducer
export default checkUserSlice.reducer;
