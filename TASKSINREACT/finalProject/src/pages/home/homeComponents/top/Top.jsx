import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../../../api/Api";
import "./topStyle/top.css";

const CATEGORY_MAP = [
  { label: "Furniture", category: "furniture" },
  { label: "Smartphones", category: "smartphones" },
  { label: "Laptops", category: "laptops" },
  { label: "Home Decoration", category: "home-decoration" }
];

const Top = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const all = [];

        for (const { category } of CATEGORY_MAP) {
          const res = await fetchProductsByCategory(category);
          const product = res.data.products[0]; 
          if (product) {
            all.push(product);
          }
        }

        setItems(all);
        setActiveIndex(all.length >= 4 ? 3 : all.length - 1);
      } catch (err) {
        console.error("Ошибка при загрузке категорий:", err);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="top">
      <h2 className="top__title">Top Categories</h2>

      <div className="top__list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`top__item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="top__img-wrapper">
              <img src={item.thumbnail} alt={item.title} />
              {index === activeIndex && (
                <span className="top__badge">View Shop</span>
              )}
            </div>
            <p className="top__name">{item.title}</p>
            <p className="top__price">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="top__dots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Top;
