import RegisterForm from "modules/RegisterForm";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { signup } from "redux/auth/auth-operations";
import useAuth from "shared/hooks/useAuth";
import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const onRegister = (data) => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/books" />;
  }
  return (
    <div className="container">
      <h2 className={styles.title}>Register</h2>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
