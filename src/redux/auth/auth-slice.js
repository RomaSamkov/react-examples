import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./auth-operations";

const initialState = {
  user: {},
  isLogin: false,
  token: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signup.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
      store.loading = false;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [login.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
      store.loading = false;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
