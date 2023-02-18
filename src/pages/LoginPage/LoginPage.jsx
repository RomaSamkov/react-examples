import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "redux/auth/auth-operations";
import { getAuthError, isAuth } from "redux/auth/auth-selectors";
import LoginForm from "modules/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  console.log(isLogin);

  const onLogin = (data) => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/books" />;
  }
  return (
    <div className="container">
      <h2>Login Page</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: "red" }}>{statusText}</p>}
    </div>
  );
};

export default LoginPage;
