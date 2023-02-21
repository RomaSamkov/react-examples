import { createSlice } from "@reduxjs/toolkit";
import { getCurrent, login, logout, signup } from "./auth-operations";

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
    [logout.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store) => {
      store.user = {};
      store.isLogin = false;
      store.token = "";
      store.loading = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [getCurrent.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.user = payload;
      store.isLogin = true;
      store.loading = false;
    },
    [getCurrent.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = "";
    },
  },
});

export default authSlice.reducer;
