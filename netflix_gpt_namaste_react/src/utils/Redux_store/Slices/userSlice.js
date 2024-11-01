import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
    setSignOut: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { setUserLogin, setSignOut } = userSlice.actions;
