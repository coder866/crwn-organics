import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="" className="option">
          CONTACT
        </Link>
        <Link to="" className="option">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};
export default Header;
