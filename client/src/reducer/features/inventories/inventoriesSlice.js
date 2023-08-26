import { createSlice } from "@reduxjs/toolkit";
// import { fetchInventoriesData } from "./inventoriesAction";

const initialState={
    loading:false,
    data:null,
    error:null
}

const inventoriesSlice= createSlice({
    name:"test",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchInventoriesData.pending, (state)=>{
            console.log("inventories")
            state.loading= true
        })
        builder.addCase(fetchInventoriesData.fulfilled, (state, action)=>{
            state.loading= false,
            state.data= action.payload.data
        })
        builder.addCase(fetchInventoriesData.rejected, (state, action)=>{
            state.loading= false,
            state.error= action.error
        })
    }
})

export default inventoriesSlice