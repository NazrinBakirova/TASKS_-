import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../api/Api";

const categories = ["furniture", "smartphones", "laptops"]; // lighting удалён

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("furniture");

  useEffect(() => {
    fetchProductsByCategory(selectedCategory)
      .then(res => {
        const original = res.data.products;
        const repeated = [];

        while (repeated.length < 9) {
          repeated.push(...original);
        }

        setProducts(repeated.slice(0, 9));
      })
      .catch(err => console.error("Ошибка при загрузке товаров:", err));
  }, [selectedCategory]);

  return (
    <div>
      <h2>Категория: {selectedCategory}</h2>

      <div style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: "10px",
              padding: "6px 12px",
              backgroundColor: selectedCategory === cat ? "#444" : "#ccc",
              color: selectedCategory === cat ? "#fff" : "#000",
              border: "none",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width="100%"
              onError={(e) => (e.target.src = "/fallback.png")}
            />
            <h3>{product.title}</h3>
            <p>Цена: {product.price}$</p>
            <p>Рейтинг: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
