import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredBooks } from "redux/books/books-selectors";
import { getFilter } from "redux/filter/filter-selectors";

import { addBook, removeBook } from "redux/books/books-actions";
import { setFilter } from "redux/filter/filter-actions";
import { useEffect } from "react";
import { fetchBooks } from "redux/books/books-operations";

const MyBooks = () => {
  const books = useSelector(getFilteredBooks);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const onAddBook = (payload) => {
    const action = addBook(payload);
    dispatch(action);
  };

  const onRemoveBook = (payload) => {
    dispatch(removeBook(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.books}>
      <Container title="Add book">
        <FormAddBook onSubmit={onAddBook} />
      </Container>
      <Container title="List of books">
        <input
          onChange={onSetFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Enter name of book"
        />
        <BookList books={books} removeBook={onRemoveBook} />
      </Container>
    </div>
  );
};

export default MyBooks;
