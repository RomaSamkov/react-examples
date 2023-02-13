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

const isDublicate = ({ title, author }, books) => {
  const normalizedTitle = title.toLowerCase();
  const normalizedAuthor = author.toLowerCase();
  const result = books.find((item) => {
    return (
      normalizedTitle === item.title.toLowerCase() &&
      normalizedAuthor === item.author.toLowerCase()
    );
  });
  return Boolean(result);
};

export const addBook = (data) => {
  const func = async (dispatch, getState) => {
    const { books } = getState();
    if (isDublicate(data, books.items)) {
      return alert(`${data.title} or ${data.author} is already exist !`);
    }

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
  const func = async (dispatch) => {
    try {
      dispatch(actions.removeBookLoading());
      await api.removeBook(id);
      dispatch(actions.removeBookSuccess(id));
    } catch (error) {
      dispatch(actions.removeBookError(error.message));
    }
  };
  return func;
};
