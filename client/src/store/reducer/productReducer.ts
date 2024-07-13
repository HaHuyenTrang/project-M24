import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//  lấy thông tin
export const getAllProduct:any = createAsyncThunk("products/getAllProduct",async()=>{
    let response = await axios.get("http://localhost:8080/products")
    return response.data
})
// xóa sản phẩm
export const deleteProduct: any = createAsyncThunk("products/deleteProduct", async(id:number)=>{
    let response = await axios.delete(`http://localhost:8080/products/${id}`)
    return response.data
})
// sửa thông tin sản phẩm
export const updateProduct:any = createAsyncThunk("products/updtaeProduct",async(product:any)=>{
    let response = await axios.put(`http://localhost:8080/products/${product.id}`,product)
    return response.data
})
// thêm sản phẩm
export const addProduct:any= createAsyncThunk("products/addProduct", async(data: any)=>{
    let response = await axios.post("http://localhost:8080/products", data)
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
        .addCase(updateProduct.fulfilled,(state:any,action)=>{
            state.list = state.list.map((product: any) => product.id === action.payload.id ? action.payload : product)
        })
        .addCase(addProduct.fulfilled,(state: any,action)=>{
            state.list.push(action.payload)
        })
    }
})

export default productReducer.reducer