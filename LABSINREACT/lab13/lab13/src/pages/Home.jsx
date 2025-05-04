
import React from "react";
import Slider from "../components/Slider";

const imageData = [
  "https://i.pinimg.com/736x/49/bf/d4/49bfd46adaf1966b774aa213bdc59059.jpg",
  "https://i.pinimg.com/736x/0f/7f/23/0f7f2393da55944e3a7a7d205d5b5544.jpg",
  "https://i.pinimg.com/736x/f4/20/fe/f420fe35dee654cad327715e0ba54273.jpg",
  "https://i.pinimg.com/736x/0f/63/14/0f63148f0b8e0cacfeda88a43445a4e0.jpg",
  "https://i.pinimg.com/736x/c5/b6/62/c5b66210392bbfcd5081a6cc227c2fc5.jpg",
  "https://i.pinimg.com/736x/39/47/39/3947393df234e0bbeeed566ed2942930.jpg"
];

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Image Slider</h1>
      <Slider images={imageData} />
    </div>
  );
};

export default Home;
