import React from "react";
import "../Pages/Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="login-header">Login</div>
        <form>
          <div className="email">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="password">
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
          </div>
          <div className="login-submit">
            <button type="submit" class="loginbtn">
              Login
            </button>
          </div>

          <div>
            <p>
              Create a new account? <a href="/Register">Register</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
