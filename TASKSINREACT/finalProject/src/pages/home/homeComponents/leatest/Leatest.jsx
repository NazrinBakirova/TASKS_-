import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../../../api/Api";
import { addToCart } from "../../../../redux/cartSlice";
import "./leatestStyle/leatest.scss";
import { FaHeart, FaRegHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const TABS = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const getRandomProducts = (products, count = 6) => {
  return [...products].sort(() => 0.5 - Math.random()).slice(0, count);
};

const Leatest = () => {
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProductsByCategory("smartphones");
        const products = res.data.products;
        setAllProducts(products);
        setVisibleProducts(getRandomProducts(products));
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleProducts(getRandomProducts(allProducts));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="leatest">
      <h2 className="leatest_title">Leatest Products</h2>

      <div className="leatest_tabs">
        {TABS.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="leatest_grid">
        {visibleProducts.map((product) => (
          <div className="leatest_card" key={product.id}>
            <div className="card_image">
              <img src={product.thumbnail} alt={product.title} />
              <div className="icons">
                <FaShoppingCart onClick={() => handleAddToCart(product)} />
                <span onClick={() => toggleFavorite(product.id)}>
                  {favorites.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                </span>
                <FaSearch onClick={() => setSelectedProduct(product)} />
              </div>
            </div>

            <div className="card_info">
              <p className="title">{product.title}</p>
              <div className="price">
                <span>${product.price}</span>
                <span className="old_price">
                  ${(product.price * 1.5).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="product_modal_overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close_modal"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p className="price">${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Brand:</strong> {selectedProduct.brand}
            </p>
            <p>
              <strong>Rating:</strong> {selectedProduct.rating} ⭐
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leatest;
