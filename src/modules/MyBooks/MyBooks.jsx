import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredBooks } from "redux/books/books-selectors";
import { getFilter } from "redux/filter/filter-selectors";

import { setFilter } from "redux/filter/filter-actions";
import { useEffect } from "react";
import { fetchBooks, addBook, removeBook } from "redux/books/books-operations";

const MyBooks = () => {
  const books = useSelector(getFilteredBooks);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const onAddBook = (payload) => {
    dispatch(addBook(payload));
  };

  const onRemoveBook = (id) => {
    dispatch(removeBook(id));
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
        <label className={styles.label} htmlFor="">
          Filter of books :
        </label>
        <input
          className={styles.input}
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
