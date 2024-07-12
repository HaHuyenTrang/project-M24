import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer"
import userReducer from "./reducer/userReducer";
import categoryReducer from "./reducer/categoryReducer";

const store=configureStore({
    reducer:{
        productReducer,
        userReducer,
        categoryReducer
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;