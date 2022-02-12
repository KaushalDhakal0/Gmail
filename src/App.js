import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/Mail/Mail";
import EmailList from "./Components/EmailList/EmailList";
import Login from "./Components/Login/login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendMail from "./Components/Mail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";

// import { useDispatch, useSelector } from "react-redux";
// import { selectUser, login, logout } from "./features/userSlice";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const sendMessageisOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is LoggedIn
        console.log(userAuth);
        dispatch(
          login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        auth.signOut();
      }
    });
  }, []);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="mail" element={<Mail />} />
              <Route exact path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageisOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
