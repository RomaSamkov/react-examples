import { createAction } from "@reduxjs/toolkit";

export const fetchBooksLoading = createAction("books/fetch/loading");
export const fetchBooksSuccess = createAction("books/fetch/success");
export const fetchBooksError = createAction("books/fetch/error");

export const addBookLoading = createAction("books/add/loading");
export const addBookSuccess = createAction("books/add/success");
export const addBookError = createAction("books/add/error");

export const removeBookLoading = createAction("books/remove/loading");
export const removeBookSuccess = createAction("books/remove/success");
export const removeBookError = createAction("books/remove/error");
