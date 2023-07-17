import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center
     vh-100" id="b-img" >
      <div className="border  border-3 border-secondary p-4 bg-white">
        <form>
          <h2 className="text-center">Login</h2>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="Email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="Password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              className="custom-control custom-checkbox me-1"
            />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <div className="mb-3 d-grid">
            <button className="btn btn-danger" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;