import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import API from '../../services/API';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../reducer/features/auth/authAction';



const Private = ({children}) => {
  const token= localStorage.getItem("token")
  const dispatch= useDispatch()
  // console.log(token)
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/get-current-user");
      console.log(data);
      dispatch(currentUser(data))
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if(token){
    return (
    
      <div>{children}</div>
    )
  }
  return <Navigate to={"/"}/>
}

export default Private