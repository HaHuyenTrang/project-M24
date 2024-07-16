import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../../interface/user";
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

export const addCarts: any = createAsyncThunk("products/addCart", async (id: number) => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    return response.data
})

const productReducer=createSlice({
    name:"productReducer",
    initialState:{
        list:[],
        cart: [],
    },
    reducers:{
        setCart(state, action) {
            state.cart = action.payload
        }
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
            state.cart.push(action.payload);
        })
        .addCase(addCarts.fulfilled, (state: any, action) => {
            const productId = action.payload;
            const productToAdd = state.list.find((product: Products) => product.id === productId);
            if (productToAdd) {
                // Thêm sản phẩm vào giỏ hàng
                state.cart.push(productToAdd);
            }
        });
    }
})

export const { setCart} = productReducer.actions
export default productReducer.reducer