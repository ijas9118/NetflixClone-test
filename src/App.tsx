import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/");
      } else {
        console.log("Logged out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
