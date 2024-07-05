import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const userReducer = createSlice({
    name: "user",
    initialState: {
        user: userState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.user = action.payload
        } )
    }
})

export default userReducer.reducer