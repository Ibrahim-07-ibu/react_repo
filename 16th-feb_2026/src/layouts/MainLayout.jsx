import React from "react";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
function MainLayout() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/html">HTML</Link></li>
          <li><Link to="/css">CSS</Link></li>
          <li><Link to="/javascript">JS</Link></li> 
          <li><Link to="/contact">Contact Us</Link></li>      
        </ul>
      </header>
      {/* outlet */}
      <div className="outlet">
      <Outlet />
      </div>
      <footer>CopyRights 2026, All rights reserved</footer>
    </div>
  );
}

export default MainLayout;
