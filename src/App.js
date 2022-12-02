import "./App.css";
import Register from "./components/Register";
import Login from "./components/login";
import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Register
              user={user}
              setUser={setUser}
              handleRegister={handleRegister}
            />
          }
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
