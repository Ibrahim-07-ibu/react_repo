import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Start Bootstrap
</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Shop ▼</Link>
      </div>

      <button className="cart-btn">Cart</button>
    </nav>
  );
}

export default Navbar;
