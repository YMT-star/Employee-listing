import React from "react";
import "../Pages/Register.css";
const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="register-header">Register</div>
        <form>
          <div className="register-name">
            <label for="Name">
              <b>Name</b>
            </label>
            <input
              type="string"
              placeholder="Enter Name"
              name="Name"
              id="phone"
              required
            />
          </div>
          <div className="register-email">
            <label for="Email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="Name"
              id="phone"
              required
            />
          </div>
          <div className="register-psw">
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
          <div className="repeact-psw">
            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
          </div>
          <div className="register-submit">
            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>

          <div>
            <p>
              Already have an account? <a href="/Login">Login</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
