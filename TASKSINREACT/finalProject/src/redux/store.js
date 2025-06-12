
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishlistSlice";  //  импорт нового слайса

const CART_KEY     = "cart_items_with_qty";
const USER_KEY     = "user_data";
const WISHLIST_KEY = "wishlist_items";        //  ключ для избранного

function load(key, def) {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) : def;
  } catch {
    return def;
  }
}

function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

const preloadedCart     = load(CART_KEY, []);
const preloadedUser     = load(USER_KEY, null);
const preloadedWishlist = load(WISHLIST_KEY, []);

const store = configureStore({
  reducer: {
    cart:     cartReducer,
    user:     userReducer,
    wishlist: wishlistReducer,   
  },
  preloadedState: {
    cart:     { items: preloadedCart },
    user:     { data: preloadedUser },
    wishlist: { items: preloadedWishlist },  // начальное состояние
  }
});

store.subscribe(() => {
  const { cart, user, wishlist } = store.getState();
  save(CART_KEY,     cart.items);
  save(USER_KEY,     user.data);
  save(WISHLIST_KEY, wishlist.items);        
});

export default store;
