import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";
import styles from "./NavBarUser.module.scss";

const NavBarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <span className={styles.name}>{name}</span>
      <span className={styles.span}>✔</span> |{" "}
      <button className={styles.btn} type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default NavBarUser;
