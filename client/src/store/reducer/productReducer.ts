import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct:any = createAsyncThunk("products/getAllProduct",async()=>{
    let response = await axios.get("http://localhost:8080/products")
    return response.data
})

const productReducer=createSlice({
    name:"productReducer",
    initialState:{
        list:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.list=action.payload
        })
    }
})

export default productReducer.reducer