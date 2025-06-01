import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../../../api/Api";
import "./featuredStyle/featured.css";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const categories = ["furniture", "smartphones", "laptops", "laptops"];

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // 👈 модалка

  useEffect(() => {
    const fetchAll = async () => {
      try {
        let allProducts = [];
        for (const category of categories) {
          const res = await fetchProductsByCategory(category);
          const categoryProducts = res.data.products.slice(0, 4);
          allProducts = [...allProducts, ...categoryProducts];
        }
        setProducts(allProducts.slice(0, 16));
      } catch (err) {
        console.error("Ошибка при загрузке товаров:", err);
      }
    };
    fetchAll();
  }, []);

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

  const slides = [];
  for (let i = 0; i < products.length; i += 4) {
    slides.push(products.slice(i, i + 4));
  }

  return (
    <div className="home_featured_products">
      <div className="home_featured_products_title">
        <h3>Featured Products</h3>
      </div>

      <div className="slider_wrapper">
        <div className="slides">
          {slides[slideIndex]?.map((product) => (
            <div
              className="product_card"
              key={product.id}
              onClick={() => setSelectedProduct(product)} // 👈 открыть модалку
            >
              <div className="card_actions" onClick={(e) => e.stopPropagation()}>
                <span onClick={() => toggleFavorite(product.id)}>
                  {favorites.includes(product.id) ? (
                    <FaHeart className="icon heart active" />
                  ) : (
                    <FaRegHeart className="icon heart" />
                  )}
                </span>
                <span onClick={() => addToCart(product)}>
                  <FaShoppingCart className="icon cart" />
                </span>
              </div>

              <div className="image_wrapper">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  onError={(e) => (e.target.src = "/fallback.png")}
                />
              </div>

              <div className="product_info">
                <h3>{product.title}</h3>
                <p>price: {product.price}$</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider_lines">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === slideIndex ? "line active" : "line"}
              onClick={() => setSlideIndex(i)}
            ></span>
          ))}
        </div>
      </div>

     
      {selectedProduct && (
        <div className="modal_overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={() => setSelectedProduct(null)}>×</button>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}$</p>
            <p><strong>Brand:</strong> {selectedProduct.brand}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
