import {configureStore, createSlice} from "@reduxjs/toolkit";
import adminReducer from "./client/features/admin/adminSlice"
import commonReducer from './client/features/common'
import safetyReducer from "./client/features/safety/safetySlice";
import ecologyReducer from "./client/features/ecology/ecologySlice";

export const store = configureStore({
    reducer:{
        admin:adminReducer,
        common:commonReducer,
        safety:safetyReducer,
        ecology:ecologyReducer
    }
})

