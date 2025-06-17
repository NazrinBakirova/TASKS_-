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
  FaThLarge,
  FaList,
} from "react-icons/fa";
import "./shopList.scss";

const CATEGORIES = ["furniture", "smartphones", "laptops"];

const ShopList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);
  const wishlist = useSelector((s) => s.wishlist.items);

  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("best");
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
    if (sortBy === "best") return b.rating - a.rating;
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="shop-list">
      {/* Header */}
      <div className="shop-list__header">
        <h2>Shop</h2>
        <p>Browse our products</p>
      </div>

      {/* Controls */}
      <div className="shop-list__controls">
        <div className="control search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="control sort-by">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="best">Best Rating</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div className="control view-toggle">
          <button
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            <FaThLarge />
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Product Display */}
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
                      {isFav ? (
                        <FaHeart className="heart active" />
                      ) : (
                        <FaRegHeart className="heart" />
                      )}
                    </span>
                    <span onClick={() => setSelectedProduct(p)}>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div className="card__info">
                  <h3 className="card__title">{p.title}</h3>
                  <div className="card__prices">
                    <span className="price">${p.price}</span>
                    {p.discountPercentage && (
                      <span className="old-price">
                        ${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
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
                  <p className="card__description">{p.description}</p>
                  <div className="card__bottom">
                    <div className="card__prices">
                      <span className="price">${p.price}</span>
                      {p.discountPercentage && (
                        <span className="old-price">
                          ${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="card__actions">
                      <span onClick={() => handleAddToCart(p)}>
                        <FaShoppingCart />
                      </span>
                      <span onClick={() => toggleWishlist(p)}>
                        {isFav ? (
                          <FaHeart className="heart active" />
                        ) : (
                          <FaRegHeart className="heart" />
                        )}
                      </span>
                      <span onClick={() => setSelectedProduct(p)}>
                        <FaSearch />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div
          className="modal_overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close_btn"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
            />

            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>

            <div className="card__prices">
              <span className="price">${selectedProduct.price}</span>
              {selectedProduct.discountPercentage && (
                <span className="old-price">
                  ${(selectedProduct.price / (1 - selectedProduct.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </div>

            <div className="card__actions">
              <span onClick={() => handleAddToCart(selectedProduct)}>
                <FaShoppingCart />
              </span>
              <span onClick={() => toggleWishlist(selectedProduct)}>
                {wishlist.some((i) => i.id === selectedProduct.id) ? (
                  <FaHeart className="heart active" />
                ) : (
                  <FaRegHeart className="heart" />
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopList;