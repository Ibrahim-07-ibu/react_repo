import React from "react";
import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="layout">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">PraptiHR</h2>

        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/apply" className="nav-item active">Apply Leave</Link>
          <Link to="/attendance" className="nav-item">My Attendance</Link>
          <Link to="/payroll" className="nav-item">Payroll</Link>
          <Link to="/profile" className="nav-item">My Profile</Link>
          <p className="nav-item logout">Log Out</p>
        </nav>
      </aside>

      {/* Main Card */}
      <div className="card">

        {/* Header */}
        <header className="header">
          <h3>Welcome back, John</h3>
          <input type="text" placeholder="Search" />
        </header>

        {/* Page Content */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
