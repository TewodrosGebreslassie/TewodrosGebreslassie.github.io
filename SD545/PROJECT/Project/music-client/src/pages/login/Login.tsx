import React, { ChangeEvent, useState, MouseEvent } from "react";
import "./index.css";
import bagroundHomewl from "../../images/bagroundHomewl.png";
import { useNavigate } from "react-router-dom";
import musicServices from "../../apis/services/musicServices";

// type UserInput = { username: string; password: string };

export default function Login() {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const navigater = useNavigate();
  const users = [
    { username: "pop", password: "password" },
    { username: "rock", password: "password" },
    { username: "hiphop", password: "password" },
    { username: "mix", password: "password" },
  ];

  const userInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  console.log("user info :" + userInput.username, userInput.password);

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const checkandVerify = users.find((user) => user.username === userInput.username && user.password === userInput.password);

    try {
      if (checkandVerify) {
        const response = await musicServices.login(userInput);

        // const response = await axios.post("http://localhost:8000/api/auth/login", userInput);
        // console.log("Response object:", response);
        const { accessToken } = response.data;
        localStorage.setItem("access_Token", accessToken);
        navigater("/music");
      }
    } catch (eror) {
      console.log("errorr...", eror);
      // const errormassage = "user name or password not match!";
    }
  };

  return (
    <div className="container loginbaground">
      <form className="login-wrap loginbox">
        <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
          <img className="mb-4" src={bagroundHomewl} alt="logoFOrLogin" width="182" height="130" />
        </div>
        <p></p>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" name="username" placeholder="Email address" onChange={userInfo} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            placeholder="Password"
            onChange={userInfo}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleLogin}>
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
      </form>
    </div>
  );
}
