import { Route, Routes } from "react-router";
import Login from "./auth/Login";
import Signin from "./auth/Signin";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  if (!user) {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />;
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <div className="headerWrapper">
        <div className="headerInnerWrapper">
          <Header />
        </div>
      </div>
      <div className="appPagesWrapper">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
