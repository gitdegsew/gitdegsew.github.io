import React from "react";
import "./register.css";
const Register = ({ user, setUser, handleRegister }) => {
  return (
    <div className="register">
      <h2>Sign up</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="username"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
