import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAuthError } from "redux/auth/auth-selectors";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const { status } = useSelector(getAuthError);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
    if (status) {
      toast.error("Not correct email or email already exist !");
    }
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
