import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand fw-bold" to="/">SafetyApp</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/orderDashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addOrder">Add Order</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/safety">Safety</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
