import {createAsyncThunk} from "@reduxjs/toolkit"
import API from "../../../services/API";
console.log("inventory")
 const fetchInventoriesData= createAsyncThunk("auth/test", async({rejectWithValue})=>{
    try {
        console.log("test")
        const {data}= await API.get("/inventory/get-articles")
        if(data?.success){
            console.log(data)
            
        }
        return data
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          } else {
            return rejectWithValue(error.message);
          }
        // if (error.response && error.response.data.message) {
        //     throw new Error(error.response.data.message);
        //   }
        //   throw new Error(error.message);
    }
})
