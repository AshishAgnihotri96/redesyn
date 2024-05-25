import "./BottomNavUserEcosystem.css";
import React from "react";
import PropTypes from "prop-types";
const BottomNavUserEcosystem = ({ className = "" }) => {
  return (
    <footer className={`bottom-nav-user-ecosystem ${className}`}>
      <img className="subtract-icon" alt="" src="/subtract.svg" />
      <img className="noise-texture" alt="" src="/noise--texture@2x.png" />
      <div className="bottom-nav-user-ecosystem-child" />
      <div className="navigation">
        <div className="profile-button">
          <img
            className="feed-icon"
            loading="lazy"
            alt=""
            src="/feed-icon@2x.png"
          />
        </div>
        <div className="feed">Feed</div>
      </div>
      <div className="shop-container-parent">
        <div className="shop-container">
          <div className="shop-items">
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
          <div className="shop-items1">
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
      <div className="navigation1">
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
