import "./BottomNavUserEcosystem.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegMinusSquare } from "react-icons/fa";

const BottomNavUserEcosystem = ({ className = "" }) => {
  const [selected, setSelected] = useState("Feed");

  return (
    <footer className={`bottom-nav-user-ecosystem ${className}`}>
      <img className="subtract-icon" alt="" src="/subtract.svg" />
      <img className="noise-texture" alt="" src="/noise--texture@2x.png" />
      <div className="bottom-nav-user-ecosystem-child" />
      <div className="navigation">
        <div
          className={`profile-button ${selected === "Feed" ? "selected" : ""}`}
          onClick={() => setSelected("Feed")}
        >
          <FaRegMinusSquare size={24} className="icon" />
          <div className="feed">Feed</div>
        </div>
      </div>
      <div className="shop-container-parent">
        <div className="shop-container">
          <div
            className={`shop-items ${selected === "Shop" ? "selected" : ""}`}
            onClick={() => setSelected("Shop")}
          >
            <div className="shop-parent">
              <div className="shop-label">
                <div className="wrapper-shop-icon">
                  <img
                    className="shop-icon"
                    loading="lazy"
                    alt=""
                    src="/shop-icon.svg"
                  />
                </div>
              </div>
              <div className="shop">Shop</div>
            </div>
          </div>
          <div
            className={`shop-items1 ${
              selected === "My Items" ? "selected" : ""
            }`}
            onClick={() => setSelected("My Items")}
          >
            <div className="my-items-wrapper">
              <img
                className="my-items-icon"
                loading="lazy"
                alt=""
                src="/my-items.svg"
              />
            </div>
            <div className="my-items">My Items</div>
          </div>
        </div>
        <div className="home-button-container">
          <div className="home-button" />
        </div>
      </div>
      <div
        className={`navigation1 ${selected === "Me" ? "selected" : ""}`}
        onClick={() => setSelected("Me")}
      >
        <img
          className="user-profile-my-profile-icon"
          loading="lazy"
          alt=""
          src="/user-profile-my-profile-icon.svg"
        />
        <div className="me-wrapper">
          <div className="me">Me</div>
        </div>
      </div>
    </footer>
  );
};

BottomNavUserEcosystem.propTypes = {
  className: PropTypes.string,
};

export default BottomNavUserEcosystem;
