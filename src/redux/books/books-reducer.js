import { createReducer } from "@reduxjs/toolkit";
import { addBook, removeBook } from "./books-actions";

const booksReducer = createReducer([], {
  [addBook]: (store, { payload }) => {
    store.push(payload);
  },
  [removeBook]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default booksReducer;
