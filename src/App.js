import "./App.css";
import NavBar from "modules/NavBar";
import UserRoutes from "UserRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrent } from "redux/auth/auth-operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <UserRoutes />
    </div>
  );
}

export default App;
