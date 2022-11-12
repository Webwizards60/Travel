import {createSlice} from "@reduxjs/toolkit"



const dataSlice = createSlice({
  name:'data',
  initialState:{
    data:[1,2,3,4,5,6,6]
  },
  reducers:{
    setData(state,action){
       state.data = action.payload
    }
  }
})

export const dataActions = dataSlice.actions;

export default dataSlice