import{ createSlice } from "@reduxjs/toolkit"
import { currentUser, fetchData, registerUser, userLogin } from "./authAction"

const token= localStorage.getItem("token") || null

const initialState= {
    loading:false,
    user:null,
    token,
    error:null,
    data:[]
}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(userLogin.pending, (state)=>{state.loading= true})
        builder.addCase(userLogin.fulfilled, (state,action)=>{
            state.loading=false
            state.token=action.payload.token
            state.user= action.payload.user
        })
        builder.addCase(userLogin.rejected,(state,action)=>{
            state.loading=false
            state.error= action.error
        })
        builder.addCase(registerUser.pending, (state)=>{state.loading= true})
        builder.addCase(registerUser.fulfilled, (state,action)=>{
            state.loading=false
            state.user= action.payload.user
        })
        builder.addCase(registerUser.rejected,(state,action)=>{
            state.loading=false
            state.error= action.error
        })

        builder.addCase(fetchData.pending, (state)=>{
            state.loading= true
        })
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.loading= false,
            state.data= action.payload
        })
        builder.addCase(fetchData.rejected, (state, action)=>{
            state.loading= false,
            state.error= action.error
        })

        builder.addCase(currentUser.pending, (state)=>{state.loading= true})
        builder.addCase(currentUser.fulfilled, (state,action)=>{
            state.loading=false
            state.user= action.payload.user
        })
        builder.addCase(currentUser.rejected,(state,action)=>{
            state.loading=false
            state.error= action.error
        })

        

    }
})
export default authSlice