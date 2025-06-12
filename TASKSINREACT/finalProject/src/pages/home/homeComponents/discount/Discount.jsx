import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../../../api/Api";
import "./discountStyle/discount.scss";

const categories = [
  { label: "Wood Chair", value: "furniture" },
  { label: "Plastic Chair", value: "home-decoration" },
  { label: "Sofa Collection", value: "lighting" }
];

const Discount = () => {
  const [selectedCategory, setSelectedCategory] = useState("furniture");
  const [furnitureProduct, setFurnitureProduct] = useState(null);

  const features = [
    "Material expose like metals",
    "Clear lines and geometric figures",
    "Simple neutral colours",
    "Material expose like metals"
  ];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetchProductsByCategory(selectedCategory);
        const products = res.data.products;
        const match = products.find((item) =>
          item.title.toLowerCase().includes("chair")
        );
        setFurnitureProduct(match || products[0]);
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return (
    <div className="discount">
      <div className="discount__header">
        <h3>Discount Item</h3>
        <div className="discount__categories">
          {categories.map((cat) => (
            <span
              key={cat.value}
              className={selectedCategory === cat.value ? "active" : ""}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      <div className="discount__content">
        <div className="discount__text">
          <h2>20% Discount Of All Products</h2>
          <h4>{furnitureProduct?.title || "Eams Sofa Compact"}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="discount__features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Shop Now</button>
        </div>

        <div className="discount__image">
          <div className="circle-bg"></div>
          {furnitureProduct && (
            <img
              src={furnitureProduct.thumbnail}
              alt={furnitureProduct.title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Discount;
