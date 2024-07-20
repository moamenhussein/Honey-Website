import React from "react";
import ShopImage from "../../images/banner_img.png"
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <h4>Our Shop</h4>
      <img src={ShopImage} alt="Shop Image"/>
    </div>
  );
};

export default Shop;
