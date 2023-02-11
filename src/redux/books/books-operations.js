import { getBooks } from "shared/api/books";
import {
  fetchBooksError,
  fetchBooksLoading,
  fetchBooksSuccess,
} from "./books-actions";

export const fetchBooks = () => {
  const func = async (dispatch) => {
    try {
      dispatch(fetchBooksLoading());
      const data = await getBooks();
      dispatch(fetchBooksSuccess(data));
    } catch (error) {
      dispatch(fetchBooksError(error));
    }
  };
  return func;
};
