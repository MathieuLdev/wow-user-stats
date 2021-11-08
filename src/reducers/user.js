import { createSlice } from "@reduxjs/toolkit";

const initialState = {region: "", characterRealm: "", name: ""}

export const userSlice = createSlice({
   name: "user",
   initialState: { value: initialState },
   reducers: {
      getUserInfo: (state, action) => {
         state.value = action.payload
      }
   }
});

export const {getUserInfo} = userSlice.actions;

export default userSlice.reducer;