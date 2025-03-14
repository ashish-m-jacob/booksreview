import { React, useState } from "react";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";
import "./Landing.css";

function Landing() {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  const setHighlight = (type) => () => {
    if (type === "login") {
      setLogin(true);
      setSignup(false);
      //adding CSS class to the selected element
      document.getElementById("login").classList.add("highlight");
      //removing CSS class from the other element
      document.getElementById("signup").classList.remove("highlight");
    } else {
      setLogin(false);
      setSignup(true);
      //adding CSS class to the selected element
      document.getElementById("signup").classList.add("highlight");
      //removing CSS class from the other element
      document.getElementById("login").classList.remove("highlight");
    }
  };
  return (
    <>
      <div className="landing-card">
        <h1>Welcome! Login or Signup to continue</h1>
        <div className="auth-titles">
          <h2 id="login" onClick={setHighlight("login")} className="highlight">
            Login
          </h2>
          <h2 id="signup" onClick={setHighlight("signup")}>
            Signup
          </h2>
        </div>
        {login ? <Login /> : <Signup />}
      </div>
    </>
  );
}

export default Landing;
