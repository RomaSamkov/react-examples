import * as api from "shared/api/books";
import * as actions from "./books-actions";

export const fetchBooks = () => {
  const func = async (dispatch) => {
    try {
      dispatch(actions.fetchBooksLoading());
      const data = await api.getBooks();
      dispatch(actions.fetchBooksSuccess(data));
    } catch (error) {
      dispatch(actions.fetchBooksError(error));
    }
  };
  return func;
};

export const addBook = (data) => {
  const func = async (dispatch) => {
    try {
      dispatch(actions.addBookLoading());
      const result = await api.addBook(data);
      dispatch(actions.addBookSuccess(result));
    } catch (error) {
      dispatch(actions.addBookError(error.message));
    }
  };
  return func;
};

export const removeBook = (id) => {
  const func = (dispatch) => {};
  return func;
};
