import { Button } from "@material-ui/core";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import "./login.css";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(
      login({
        email: "dummy@gmail.com",
        name: "DUMMY123",
      })
    );
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="Gmail"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
