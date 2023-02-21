import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";

const NavBarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <span>{name}</span> |{" "}
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default NavBarUser;
