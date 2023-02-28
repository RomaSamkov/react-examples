import { Link } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import styles from "./NavBar.module.scss";
import NavBarAuth from "./NavBarAuth";
import NavBarMenu from "./NavBarMenu";
import NavBarUser from "./NavBarUser/NavBarUser";

const NavBar = () => {
  const isLogin = useAuth();
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        L o g o 😀
      </Link>
      {isLogin && <NavBarMenu />}
      {isLogin ? <NavBarUser /> : <NavBarAuth />}
    </div>
  );
};

export default NavBar;
