import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const mediaSlice = createSlice({
   name: "media",
   initialState: { value: initialState },
   reducers: {
      getMedia: (state, action) => {
         state.value = action.payload
      }
   }
});

export const {getMedia} = mediaSlice.actions;

export default mediaSlice.reducer;