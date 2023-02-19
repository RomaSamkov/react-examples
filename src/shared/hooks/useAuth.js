const { useSelector } = require("react-redux");
const { isAuth } = require("redux/auth/auth-selectors");

const useAuth = () => {
  const result = useSelector(isAuth);
  return result;
};

export default useAuth;
