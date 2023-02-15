import "./App.css";
import NavBar from "modules/NavBar";
import UserRoutes from "UserRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserRoutes />
    </div>
  );
}

export default App;
