import React from "react";
import "./products.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { useState } from "react";



function Products() {
  const [counts, setcounts] = useState([0,0,0]);

  const products = [
    { img: img1, name: "Sneakers Off-White", year: 2024 },
    { img: img2, name: "Sneakers Off-White", year: 2024 },
    { img: img3, name: "Sneakers Off-White", year: 2024 },
  ];

  const increaseCount = (index) => {
    const newCounts = [...counts];
    newCounts[index] =0}

    <div className="container">
      {products.map((item, index) => (
        <div className="cards" key={index}>
          <img src={item.img} alt="shoe" />
          <div className="description">
            <div className="wrap">
              <h3>{item.name}</h3>
              <h3 className="year">{item.year}</h3>
            </div>
            <button onClick={() => increaseCount(index)}>+</button>
          </div>
          <p className="brand">NIKE</p>
          <div className="price_count">
            <p className="price">$38.00</p>
            <p className="count">count:&nbsp;{counts[index]}</p>
          </div>
        </div>
      ))}
    </div>

}


export default Products;
