import { createSlice } from "@reduxjs/toolkit";

const fruitsInitialState = [
  { name: "apple", id: "1" },
  { name: "orange", id: "2" },
  { name: "kiwi", id: "3" },
  { name: "banana", id: "4" },
  { name: "watermelon", id: "5" },
  { name: "strawberry", id: "6" },
  { name: "berry", id: "7" }
];

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState: {
    fruites: fruitsInitialState,
    selectedFruits: []
  },
  reducers: {
    addFruit: (state, action) => {
      const fruit = action.payload;
      const index = state.selectedFruits.findIndex(item => item.id === fruit.id);
      if (index !== -1) {
        state.selectedFruits.splice(index, 1);
      } else {
        state.selectedFruits.push(fruit);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.selectedFruits = state.selectedFruits.filter(f => f.id !== id);
    },
    clearCart: (state) => {
      state.selectedFruits = [];
    },
    selectAll: (state) => {
      state.selectedFruits = [...state.fruites];
    }
  }
});

export default fruitsSlice.reducer;
export const { addFruit, removeFromCart, clearCart, selectAll } = fruitsSlice.actions;