import styles from "./LoginForm.module.scss";

import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Enter password"
        />
      </div>

      <div className={styles.group}>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
