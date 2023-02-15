import { NavLink } from "react-router-dom";
import styles from "./NavBarAuth.module.scss";

const NavBarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      |
      <NavLink to="login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
