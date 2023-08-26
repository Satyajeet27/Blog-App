import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducer/features/auth/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch= useDispatch()
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(email, password)
      dispatch(userLogin({email, password}))
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-5 mx-auto card shadow px-3 py-4">
            <h2 className="text-secondary mb-3">Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
