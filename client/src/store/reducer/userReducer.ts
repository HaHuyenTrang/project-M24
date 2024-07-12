import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../interface/user";
import axios from "axios";

const userState: Users[] = [];

// API lấy user
export const getAllUser: any = createAsyncThunk(
    "users/getAllUser",
    async () => {
        const response = await axios.get("http://localhost:8080/users");
        return response.data
    }
)


// API thêm user 
export const addUser: any = createAsyncThunk(
    "users/addUser",
    async (data: any) => {
        const response = await axios.post("http://localhost:8080/users", data);
        return response.data;
    }
)

// tìm kiếm user
export const searchUser:any=createAsyncThunk("users/searchUser", async(search:string)=>{
    const response = await axios.get(`http://localhost:8080/users?userName_like=${search}`);
    return response.data
})

// API cập nhật trạng thái user
export const statusUser: any=createAsyncThunk("users/statusUser", async(data:any)=>{
    const response= await axios.patch(` http://localhost:8080/users/${data.id}`,data)
    return response.data
})

const userReducer = createSlice({
    name: "user",
    initialState: {
        user: userState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
        .addCase(statusUser.fulfilled,(state, action: PayloadAction<{ id: number, status: number }>)=>{
            const findUser = state.user.findIndex((user) => user.id === action.payload.id);
            if(findUser !== -1){
                state.user[findUser].status = action.payload.status
            }
        })
    }
})

export default userReducer.reducer