import React from "react";
import "./products.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Products() {
  const products = [
    {
      name: "Sneakers Off-White",
      year: 2024,
      brand: "NIKE",
      price: "$38.00",
      image: img1,
    },
    {
      name: "Sneakers Off-White",
      year: 2024,
      brand: "NIKE",
      price: "$38.00",
      image: img2,
    },
    {
      name: "Sneakers Off-White",
      year: 2024,
      brand: "NIKE",
      price: "$38.00",
      image: img3,
    },
  ];

  return (
    <div className="container">
      {products.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.name} className="product-image" />

          <div>
            <h2 className="product-name">{card.name}</h2>
            <button className="button">+</button>
          </div>

          <p className="product-year">{card.year}</p>
          <p className="product-brand">{card.brand}</p>
          <p className="product-price">{card.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
