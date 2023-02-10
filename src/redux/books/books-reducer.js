import { createReducer } from "@reduxjs/toolkit";

import { addBook, removeBook } from "./books-actions";

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

const booksReducer = createReducer(initialStore, {
  [addBook.type]: (store, { payload }) => {
    store.push(payload);
  },
  [removeBook]: (store, { payload }) =>
    store.filter((item) => item.id !== payload),
});

export default booksReducer;
