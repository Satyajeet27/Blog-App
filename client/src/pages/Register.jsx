import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useDispatch } from "react-redux";
import { registerUser } from "../reducer/features/auth/authAction";

const Register = () => {
  const [userName, setUserName]= useState("")
  const [password, setPassword]= useState("")
  const [email, setEmail]= useState("")
  const [address, setAddress]= useState("")
  const dispatch= useDispatch()
  const handleRegister=(e)=>{
    e.preventDefault()
    try {
      dispatch(registerUser({userName, email, address, password}))
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <Layout>
      <div className="container ">
        <div className="row mt-5">
          
          <div className="col-md-5 mx-auto card shadow px-3 py-4">
          <h2 className="text-secondary mb-3">Register yourself here!</h2>
          <form onSubmit={handleRegister} >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Username"
              value={userName}
              onChange={e=>setUserName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Address"
              value={address}
              onChange={e=>setAddress(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
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

export default Register;
