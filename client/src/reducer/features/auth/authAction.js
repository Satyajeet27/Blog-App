import { createAsyncThunk }  from "@reduxjs/toolkit";
import API from "../../../services/API.js";

 

export const userLogin= createAsyncThunk("auth/login", async({email, password}, {rejectWithValue})=>{
    try {
        const {data}= await API.post("/auth/login", {email, password})
        console.log(data)
        if(data?.success){
            localStorage.setItem("token",data?.token)
            console.log(data)
            alert("Login success")
            window.location.replace("/")
        }
        return data
    } catch (error) {
        console.log(error)
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          } else {
            return rejectWithValue(error.message);
          }
    }
})

export const registerUser= createAsyncThunk("auth/register", async({userName, email, password, address}, {rejectWithValue})=>{
    try {
        const {data}= await API.post("/auth/register", {userName, email, password, address})
        if(data?.success){
            console.log(data)
            alert("Register success")
        }
        return data
    } catch (error) {
        console.log(error?.response?.data?.message)
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          } else {
            return rejectWithValue(error.message);
          }
    }
})
export const currentUser= createAsyncThunk("auth/currentUser", async( {rejectWithValue})=>{
    try {
        const {data}= await API.get("/auth/get-current-user")
        if(data?.success){
            // console.log(data)
            
        }
        return data
    } catch (error) {
        // console.log(error?.response?.data?.message)
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          } else {
            return rejectWithValue(error.message);
          }
    }
})

//////////////////////////////

console.log("inventory")
export const fetchData= createAsyncThunk("auth/fetchData", async()=>{
    console.log("test")
    try {
       
        const {data}= await API.get("/inventory/get-articles")
        if(data?.success){
            console.log(data)
            
        }
        return data
    } catch (error) {
        console.log(error?.response?.data?.message)
        return error
        // if (error.response && error.response.data.message) {
        //     throw new Error(error.response.data.message);
        //   }
        //   throw new Error(error.message);
    }
})
