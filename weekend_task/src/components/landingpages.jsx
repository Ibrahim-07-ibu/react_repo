import React from "react";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <div className="logo">LOGO</div>
        <div className="icons">
          <span>IG</span>
          <span>FB</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img"></div>

        <div className="hero-content">
          <h1>Introduce your product</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="form">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <button>Sign up</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About section</h2>
        <div className="about-grid">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
        </div>
      </section>

      {/* Products */}
      {[1,2,3].map((item)=>(
        <section className="product" key={item}>
          <div className="product-text">
            <h2>Product {item}</h2>
            <p>Description</p>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
          </div>
          <div className="product-img"></div>
        </section>
      ))}

      {/* Footer Access */}
      <section className="access">
        <div>
          <h2>Get access</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="form">
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <button>Sign up</button>
        </div>
      </section>

    </div>
  );
}

export default Landingpage;