import React from 'react';
import { useNavigate } from 'react-router-dom';
import './headerStyle/header.scss';
import lampImg from './homeImgs/lamp.png';
import SofaImg from './homeImgs/sofaHeader.png';

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <div className="home_header">
      <div className="home_header_img">
        <img src={lampImg} width={350} height={350} alt="Lamp" />
      </div>
      <div className="home_header_parts">
        <div className="home_header_left">
          <div className="home_header_left_title">
            <p>Best Furniture For Your Castle....</p>
            <div className="home_header_left_title_main">
              <h2>New Furniture Collection</h2>
              <h2>Trends in 2020</h2>
            </div>
            <div className="home_header_left_title_discription">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                est adipiscing in phasellus non in justo.
              </p>
            </div>
          </div>
          <div className="home_header_left_btn">
            <button className="btn" onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
        </div>
        <div className="home_header_right">
          <div className="home_header_right_img">
            <img src={SofaImg} width={600} height={580} alt="Sofa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
