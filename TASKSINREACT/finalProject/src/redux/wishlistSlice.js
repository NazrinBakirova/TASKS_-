
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "wishlist_items";

function loadWishlist() {
  try {
    const s = localStorage.getItem(LOCAL_STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}

function saveWishlist(items) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

const slice = createSlice({
  name: "wishlist",
  initialState: {
    items: loadWishlist(),
  },
  reducers: {
    addToWishlist(state, action) {
      if (!state.items.find(i => i.id === action.payload.id)) {
        state.items.push(action.payload);
      }
      saveWishlist(state.items);
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveWishlist(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = slice.actions;
export default slice.reducer;
