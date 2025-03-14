import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <form action="" method="post">
        <input
          className="input-box2"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className="input-box2"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <input
          className="input-box2"
          type="password"
          name="check-password"
          id="check-password"
          placeholder="Confirm your password"
        />
        <button className="submit-btn" type="submit">
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;
