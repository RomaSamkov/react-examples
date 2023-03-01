import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "redux/books/books-operations";
import { getFavoriteBooks } from "redux/books/books-selectors";
import styles from "./MyFavoriteBooksPage.module.scss";

const MyFavoriteBooksPage = () => {
  const dispatch = useDispatch();

  const onRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  const books = useSelector(getFavoriteBooks);
  const elements = books.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Title :<span className={styles.itemText}> "{title}".</span>
        </p>{" "}
        <p>
          Author: <span className={styles.itemText}> {author}.</span>
        </p>
        <button
          type="button"
          className={styles.btn}
          onClick={() => onRemoveBook(id)}
        >
          X
        </button>
      </div>
    </li>
  ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Favorite Books</h2>
      <ol className={styles.list}>{elements}</ol>
    </div>
  );
};

export default MyFavoriteBooksPage;
