import RegisterForm from "modules/RegisterForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signup } from "redux/auth/auth-operations";
import { getAuthError, isAuth } from "redux/auth/auth-selectors";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = (data) => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/books" />;
  }
  return (
    <div className="container">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: "red" }}>{statusText}</p>}
    </div>
  );
};

export default RegisterPage;
