/*import React, { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Ошибка при получении продуктов:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список товаров</h2>
      {products.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
              <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h3>{product.title}</h3>
              <p>{product.description.slice(0, 50)}...</p>
              <strong>${product.price}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}*/


import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/Api";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Error", err));
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      {products.map((p) => (
        <div key={p.id}>
             <img src={p.thumbnail} alt={p.title}  />
          <h3>{p.title}</h3>
          <p>{p.price}$</p>
        </div>
      ))}
    </div>
  );
}
