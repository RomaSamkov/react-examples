import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hello Page !</h2>
      <Link className={styles.link} to="/">
        To Main Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
