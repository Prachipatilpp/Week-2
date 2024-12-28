import React from "react";
import logo from "./logo.svg";
import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/home" element={<HomeComponent />} />

      </Routes>
    </BrowserRouter>
  );
}

const HelloComponent = () => {
  return <div>Helllooooo</div>;
};

export default App;
