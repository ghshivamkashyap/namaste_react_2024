import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: ["tea", "coffee"] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, emptyCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
