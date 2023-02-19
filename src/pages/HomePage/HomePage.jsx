import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const isLogin = useAuth();
  return (
    <div className="container">
      <h2>Home Page</h2>
      {!isLogin && (
        <NavLink to="/books" className={styles.link}>
          If you see this text it means that you are not authorized! <br />
          If you want to see Books ----
          <span className={styles.click}> just click here</span>
        </NavLink>
      )}
    </div>
  );
};

export default HomePage;
