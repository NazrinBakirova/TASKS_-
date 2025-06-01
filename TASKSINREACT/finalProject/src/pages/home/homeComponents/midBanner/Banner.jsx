import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../../../api/Api'; 
import './bannerStyle/banner.css';
import pinkElipse from './imgs/Ellipse 65.png'
import blueElipse from './imgs/Ellipse 66.png'
import greenElipse from './imgs/Ellipse 67.png'
const Banner = ({ addToCart }) => {
  const [chair, setChair] = useState(null);

  useEffect(() => {
    const getChair = async () => {
      try {
        const res = await fetchProductsByCategory('furniture'); 
        const chairs = res.data.products;
        const randomChair = chairs.find(item => item.title.toLowerCase().includes('chair')) || chairs[0];
        setChair(randomChair);
      } catch (err) {
        console.error('Ошибка загрузки товара:', err);
      }
    };
    getChair();
  }, []);

  if (!chair) return null;

  return (
    <div className="banner_table">
      <div className="banner_table_items">
        <div className="banner_table_items_img">
          <img src={chair.thumbnail} alt={chair.title} width={500} height={500} />
        </div>
        <div className="banner_table_items_info">
          <h3>Unique Features Of leatest &
          Trending Poducts</h3>
          <div className="banner_table_items_info_dis">
            <p> <img src={pinkElipse}  width={11} height={11}/>{chair.description}</p>
            <p><img src={blueElipse} width={11} height={11}/>All frames constructed with hardwood solids and laminates</p>
           <p><img src={greenElipse} width={11} height={11}/>Arms, backs and seats are structurally reinforced</p>
            
          </div>
          <div className="banner_table_items_info_btn">
            <button onClick={() => addToCart(chair)}>Add To Cart</button>
            <p>B&B Italian Sofa  ${chair.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
