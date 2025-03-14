import React from "react";
import "./Login.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [islogin, setIsLogin] = useState(false);

  const logMeIn = () => {
    setIsLogin(true);
  };

  return islogin ? (
    <Navigate to={"/home"} />
  ) : (
    <>
      <form action="" method="post">
        <input
          className="input-box"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className="input-box"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />

        <button className="submit-btn" type="submit" onClick={logMeIn}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
