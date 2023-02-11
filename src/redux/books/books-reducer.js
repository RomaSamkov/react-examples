import { createReducer } from "@reduxjs/toolkit";

import {
  addBook,
  fetchBooksError,
  fetchBooksLoading,
  fetchBooksSuccess,
  removeBook,
} from "./books-actions";

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

const booksReducer = createReducer(initialStore, {
  [fetchBooksLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [fetchBooksSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [fetchBooksError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
  [addBook.type]: (store, { payload }) => {
    store.push(payload);
  },
  [removeBook]: (store, { payload }) =>
    store.filter((item) => item.id !== payload),
});

export default booksReducer;
