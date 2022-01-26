import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/Mail/Mail";
import EmailList from "./Components/EmailList/EmailList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { selectUser, login, logout } from "./features/userSlice";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
