import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const fetchBooksLoading = createAction("books/fetch/loading");
export const fetchBooksSuccess = createAction("books/fetch/success");
export const fetchBooksError = createAction("books/fetch/error");

export const addBook = createAction("books/add", (data) => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const removeBook = createAction("books/remove");
