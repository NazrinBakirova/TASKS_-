import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../../../api/Api";
import "./leatestStyle/leatest.css";
import { FaHeart, FaRegHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const TABS = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const getRandomProducts = (products, count = 6) => {
  return [...products].sort(() => 0.5 - Math.random()).slice(0, count);
};

const Leatest = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProductsByCategory("smartphones");
        const data = res.data.products;
        setAllProducts(data);
        setVisibleProducts(getRandomProducts(data, 6));
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleProducts(getRandomProducts(allProducts, 6));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
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
                <FaShoppingCart onClick={() => addToCart(product)} />
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
                <span className="old_price">${(product.price * 1.5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product_modal_overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product_modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_modal" onClick={() => setSelectedProduct(null)}>×</button>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p className="price">${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <p><strong>Brand:</strong> {selectedProduct.brand}</p>
            <p><strong>Rating:</strong> {selectedProduct.rating} ⭐</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leatest;
