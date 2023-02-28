import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const isLogin = useAuth();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      {!isLogin ? (
        <div className={styles.wrapper}>
          <h2 className={styles.fontFaceText}>
            This is my student draft while studying :{" "}
          </h2>
          <ul>
            <li className={styles.fontFaceText}>Redux Toolkit</li>
            <li className={styles.fontFaceText}>Login</li>
            <li className={styles.fontFaceText}>Authrization</li>
            <li className={styles.fontFaceText}>CreateAsyncThunk</li>
            <li className={styles.fontFaceText}>CreateSlice</li>
          </ul>
          <div className={styles.auth}>
            <NavLink to="/register" className={styles.text}>
              Register
            </NavLink>
            |
            <NavLink to="login" className={styles.text}>
              Login
            </NavLink>
          </div>
          <p className={styles.fontFaceText}>
            If you want to see a book-adding app just click on
            <NavLink to="/books" className={styles.fontLink}>
              "Books"
            </NavLink>
          </p>
        </div>
      ) : (
        <NavLink to="/books" className={styles.text}>
          <span className={styles.text}> just click</span>
        </NavLink>
      )}
    </div>
  );
};

export default HomePage;
