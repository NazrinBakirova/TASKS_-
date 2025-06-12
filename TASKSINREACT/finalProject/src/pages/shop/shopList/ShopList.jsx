// src/pages/shop/shopList/ShopList.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../../api/Api";
import { addToCart } from "../../../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/wishlistSlice";
import {
  FaShoppingCart,
  FaRegHeart,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import "./shopList.scss";

const CATEGORIES = ["furniture", "smartphones", "laptops"];

const ShopList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);
  const wishlist  = useSelector((s) => s.wishlist.items);

  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy]     = useState("best");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const results = await Promise.all(
        CATEGORIES.map((cat) => fetchProductsByCategory(cat))
      );
      setProducts(results.flatMap((r) => r.data.products));
    })();
  }, []);

  const handleAddToCart = (p) => {
    if (!cartItems.find((i) => i.id === p.id)) {
      dispatch(addToCart(p));
    }
  };

  const toggleWishlist = (p) => {
    if (wishlist.find((i) => i.id === p.id)) {
      dispatch(removeFromWishlist(p.id));
    } else {
      dispatch(addToWishlist(p));
    }
  };

  const filtered = products.filter((p) =>
    !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "best")        return b.rating - a.rating;
    if (sortBy === "price-asc")   return a.price - b.price;
    if (sortBy === "price-desc")  return b.price - a.price;
    return 0;
  });

  return (
    <div className="shop-list">
      {/* … header & controls … */}

      {viewMode === "grid" ? (
        <div className="shop-list__grid">
          {sorted.map((p) => {
            const isFav = wishlist.some((i) => i.id === p.id);
            return (
              <div className="card" key={p.id}>
                <div className="card__image">
                  <img src={p.thumbnail} alt={p.title} />
                  <div className="card__actions">
                    <span onClick={() => handleAddToCart(p)}>
                      <FaShoppingCart />
                    </span>
                    <span onClick={() => toggleWishlist(p)}>
                      {isFav
                        ? <FaHeart className="heart active" />
                        : <FaRegHeart className="heart" />}
                    </span>
                    <span onClick={() => setSelectedProduct(p)}>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                {/* … info … */}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="shop-list__list">
          {sorted.map((p) => {
            const isFav = wishlist.some((i) => i.id === p.id);
            return (
              <div className="card" key={p.id}>
                <div className="card__image">
                  <img src={p.thumbnail} alt={p.title} />
                </div>
                <div className="card__info">
                  <h3 className="card__title">{p.title}</h3>
                  {/* … description & prices … */}
                  <div className="card__actions">
                    <span onClick={() => handleAddToCart(p)}>
                      <FaShoppingCart />
                    </span>
                    <span onClick={() => toggleWishlist(p)}>
                      {isFav
                        ? <FaHeart className="heart active" />
                        : <FaRegHeart className="heart" />}
                    </span>
                    <span onClick={() => setSelectedProduct(p)}>
                      <FaSearch />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* … modal … */}
    </div>
  );
};

export default ShopList;
