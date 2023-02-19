import { useSelector } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";

const NavBarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      <span>{name}</span> | <button type="button">Log Out</button>
    </div>
  );
};

export default NavBarUser;
