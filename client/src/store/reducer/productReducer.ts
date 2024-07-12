import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct:any = createAsyncThunk("products/getAllProduct",async()=>{
    let response = await axios.get("http://localhost:8080/products")
    return response.data
})

export const deleteProduct: any = createAsyncThunk("products/deleteProduct", async(id:number)=>{
    let response = await axios.delete(`http://localhost:8080/products/${id}`)
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
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.list=state.list.filter((product:any)=>{
                return product.id!==action.payload.id
            })
            
        })
    }
})

export default productReducer.reducer