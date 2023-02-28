import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "redux/auth/auth-operations";
import { getAuthError } from "redux/auth/auth-selectors";
import LoginForm from "modules/LoginForm";
import useAuth from "shared/hooks/useAuth";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onLogin = (data) => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/books" />;
  }
  return (
    <div className="container">
      <h2 className={styles.title}>Login</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p className={styles.notify}>Ooops ! You are {statusText}</p>}
    </div>
  );
};

export default LoginPage;
