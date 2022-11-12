import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "places",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const placeActions = placeSlice.actions;

export default placeSlice;
