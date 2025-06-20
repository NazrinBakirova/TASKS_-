// src/components/Trending/Trending.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProductsByCategory } from "../../../../api/Api";
import "./trendingStyle/trending.scss";

const CATEGORIES = ["furniture", "smartphones", "laptops"];

const getRandomItems = (arr, count = 10) => {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
};

const Trending = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [leftBannerProduct, setLeftBannerProduct] = useState(null);
  const [rightBannerProduct, setRightBannerProduct] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        let all = [];
        for (const category of CATEGORIES) {
          const res = await fetchProductsByCategory(category);
          all = all.concat(res.data.products);
        }

        const shuffled = getRandomItems(all, 10);
        setProducts(shuffled);

        const left = all.find(p =>
          p.title.toLowerCase().includes("laptop") ||
          p.title.toLowerCase().includes("desk")
        );
        const right = all.find(p =>
          p.title.toLowerCase().includes("table") ||
          p.title.toLowerCase().includes("desk")
        );

        setLeftBannerProduct(left);
        setRightBannerProduct(right);
      } catch (err) {
        console.error("Ошибка загрузки товаров:", err);
      }
    };

    fetchAllProducts();
  }, []);

  const handleShopNow = () => {
    navigate("/shop");
  };

  const handleViewCollection = () => {
    navigate("/shop?filter=new"); // или любой другой путь для "New Collection"
  };

  return (
    <div className="trending">
      <h2 className="trending_title">Trending Products</h2>

      <div className="trending_top">
        {products.slice(0, 5).map(product => (
          <div className="trending_card" key={product.id}>
            <div className="trending_card_img">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <p className="title">{product.title}</p>
            <div className="price">
              <span>${product.price}</span>
              <span className="old_price">
                ${(product.price * 1.5).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="trending_bottom_two">
        <div className="left_banner">
          <h4>23% off in all products</h4>
          <button className="btn" onClick={handleShopNow}>
            Shop Now
          </button>
          {leftBannerProduct && (
            <img
              src={leftBannerProduct.thumbnail}
              alt={leftBannerProduct.title}
            />
          )}
        </div>

        <div className="middle_banner">
          <h4>New Collection</h4>
          <button className="btn" onClick={handleViewCollection}>
            View Collection
          </button>
          {rightBannerProduct && (
            <img
              src={rightBannerProduct.thumbnail}
              alt={rightBannerProduct.title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
