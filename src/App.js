import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/AuthComponents/LoginComponent';
import RegisterComponent from './Components/AuthComponents/RegisterComponent';
import ForgotPasswordComponent from './Components/AuthComponents/ForgotPasswordComponent';
import HomeComponent from './Components/AuthComponents/HomeComponent';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/signup" element={<RegisterComponent />} />
            <Route path="/forgotpassword" element={<ForgotPasswordComponent />} />
            <Route path="/home" element={<HomeComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
