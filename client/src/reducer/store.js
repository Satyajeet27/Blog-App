import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./features/auth/authSlice"
import inventoriesSlice from "./features/inventories/inventoriesSlice"

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        // inventories: inventoriesSlice.reducer
    }
})

export default store