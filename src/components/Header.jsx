import "./Header.css";
import React from "react";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section className={`header ${className}`}>
      <div className="status-bar-container">
        <div className="image-container">
          <img
            className="search-results-icon"
            alt=""
            src="/search-results@2x.png"
          />
          <div className="gradient-overlay"></div>
        </div>
        <div className="profile-header">
          <div className="back-button-container">
            <img
              className="navigate-back-chevron"
              loading="lazy"
              alt=""
              src="/navigate-back-chevron.svg"
            />
          </div>
          <div className="profile-info">
            <div className="name-container">
              <h3 className="starchild20-by-krissannbarret">
                starchild2.0_by_krissannbarretto
              </h3>
              <img
                className="verified-badge-icon"
                loading="lazy"
                alt=""
                src="/verified-badge.svg"
              />
            </div>
          </div>
          <img
            className="wishlist-icon"
            loading="lazy"
            alt=""
            src="/wishlist-icon@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
