import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/users.js";
import {advertisementSlice} from "./slice/advertisement.js";


export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [advertisementSlice.name]: advertisementSlice.reducer
    }
})