import { addBook, removeBook } from "./books-actions";

const initialStore = [];

const booksReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case addBook.type:
      return [...store, payload];
    case removeBook.type:
      return store.filter(({ id }) => id !== payload);

    default:
      return store;
  }
};

export default booksReducer;
