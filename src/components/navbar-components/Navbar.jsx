import React from "react";
import AccountButton from "./AccountButton";
import MenuButton from "./MenuButton";
import LogOutButton from "./LogOutButton";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { usePendingShare } from "../../hooks/PendingShareProvider";

const Navbar = () => {
    const { pendingShares = [] } = usePendingShare() || {};
  return (
    <div className="navbar">
      <MenuButton />
      <h1>Wishlister</h1>
      <AccountButton />
      <Link to="/" className="nav-link">
        Login
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <Link to="/wishlists" className="nav-link">
        Wishlists
      </Link>
      <Link to="/shared-wishlists" className="nav-link">
        Shared Wishlists
        {pendingShares.length > 0 && (
          <span className="notification-badge">{pendingShares.length}</span>
        )}
      </Link>
      <LogOutButton />
    </div>
  );
};

export default Navbar;
