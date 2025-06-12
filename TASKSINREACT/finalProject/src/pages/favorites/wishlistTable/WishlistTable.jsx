
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { addToCart } from "../../../redux/cartSlice";
import { removeFromWishlist } from "../../../redux/wishlistSlice";
import "./wishlistTable.scss";

const WishlistTable = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-table">
      <h2 className="wishlist-table__title">My Wishlist</h2>

      {items.length === 0 ? (
        <p className="wishlist-table__empty">Your wishlist is empty.</p>
      ) : (
        <>
          <div className="wishlist-table__header">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Remove</div>
          </div>
          <div className="wishlist-table__list">
            {items.map((item) => (
              <div className="wishlist-card" key={item.id}>
                <div className="wishlist-card__image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="wishlist-card__info">
                  <p className="wishlist-card__title">{item.title}</p>
                </div>
                <div className="wishlist-card__price">
                  ${item.price.toFixed(2)}
                </div>
                <div className="wishlist-card__remove">
                  <button onClick={() => handleAddToCart(item)}>
                    <FaShoppingCart />
                  </button>
                  <button onClick={() => handleRemove(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistTable;
