import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logInStatus, setLogInStatus] = useState("false");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    Axios.post("http://localhost:3001/api/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLogInStatus(false);
      } else {
        console.log(response.data);
        setLogInStatus(true);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    });
  };

  return (
    <div className="w-screen h-screen bg-slate-400 grid place-items-center">
      <div className="w-[300px] rounded-2xl shadow-xl bg-white p-8">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={updateEmail}
          required
          className="form-input mt-3"
        />
        <input
          id="passwordInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          required
          className="form-input mt-3"
        />
        <button className="mt-8 form-button" onClick={login}>
          Log in
        </button>
        <Link className="mt-2 block text-sm text-gray-500" to="/signup">
          Need an account?{" "}
          <span className="hover:underline cursor-pointer">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
