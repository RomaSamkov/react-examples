import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";
import NavBarAuth from "./NavBarAuth";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        L o g o
      </Link>
      <NavBarMenu />
      <NavBarAuth />
    </div>
  );
};

export default NavBar;
