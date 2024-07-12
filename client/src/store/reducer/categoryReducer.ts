import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../interface/user";
// import Category from "../../pages/admin/Category";

const category: Category[] = []
// lấy category
export const getCategory:any=createAsyncThunk("category/getCategory", async()=>{
    const response = await axios.get("http://localhost:8080/category");
    return response.data
})

const categoryReducer = createSlice({
    name:"category",
    initialState:{
        category: category
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.category=action.payload
        })
    }
})

export default categoryReducer.reducer