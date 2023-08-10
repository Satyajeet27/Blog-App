import React from "react";
import Layout from "../Components/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-5 mx-auto card shadow px-3 py-4">
            <h2 className="text-secondary mb-3">Login</h2>
            <form action="">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-dark w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
