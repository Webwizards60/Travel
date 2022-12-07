import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

const userSlice = createSlice({
  name:'user',
  initialState:{
    isAuthenticated : false,
  },
  reducers:{
    setAuth(state,action){
      state.isAuthenticated = action.payload
    }
  }
})

export const userActions = userSlice.actions

export default userSlice