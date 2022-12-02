import React from "react";
import "./register.css";
const Login = ({ user, setUser }) => {
  return (
    <div className="register">
      <h2>Sign up</h2>
      <form className="register-form">
        <input
          type="text"
          placeholder="username"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {/* <input 
                type="password"
                placeholder="confirm password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
             /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
