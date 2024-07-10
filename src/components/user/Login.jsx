import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="border p-4 rounded box2">
            <h3 className="text-center pt-5">Login Form</h3>
            <form id="login-form" className="mt-4">
              <div className="form-group">
                <label htmlFor="username" className="text-info">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="password" className="text-info">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="form-group text-center m-4">
                <button
                  type="submit"
                  className="btn btn-info btn-md"
                  defaultValue="submit"
                >
                  Submit
                </button>
              </div>
              <div className="form-group text-right">
                <Link to="/register" className="text-info">
                  Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
