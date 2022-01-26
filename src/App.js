import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser, login, logout } from "./features/userSlice";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
