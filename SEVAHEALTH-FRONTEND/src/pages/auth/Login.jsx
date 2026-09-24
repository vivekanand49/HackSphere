import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🏥</div>

        <h1>SEVAHEALTH</h1>
        <p>Login to your healthcare account</p>

        <form>
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>
<p>
  Don't have an account?{" "}
  <Link to="/register">Register</Link>
</p>
      </div>
    </div>
  );
}

export default Login;
