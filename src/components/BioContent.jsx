import "./BioContent.css";
import React from "react";
import PropTypes from "prop-types";
const BioContent = ({ className = "" }) => {
  return (
    <div className={`bio-content ${className}`}>
      <div className="bio-content-inner">
        <div className="frame-parent">
          <div className="name-and-title-parent">
            <div className="name-and-title">
              <div className="starchild-20-by-krissann-barr-parent">
                <p className="starchild-20-by">
                  Starchild 2.0 by Krissann Barretto
                </p>
                <div className="digital-creator">Digital Creator</div>
              </div>
            </div>
            <button className="pay-now">
              <img className="plus-icon" alt="" src="/plus-icon@2x.png" />
              <div className="follow-label">
                <div className="follow">Follow</div>
              </div>
            </button>
          </div>
          <p className="equalist-animal-container">
            <span className="equalist-animal">
              Equalist | Animal lover | Happy child
            </span>
            <span className="social-media-">
              Social media - krissann@theplugmedia.in
            </span>
            <span className="theplugmediain">@theplugmedia.in</span>
            <span className="acting-inquiries-teamkrissann">
              Acting inquiries -teamkrissann@gmail.com@talentgram.agency
            </span>
          </p>
        </div>
      </div>
      <img
        className="placeholder-icon"
        loading="lazy"
        alt=""
        src="/frame-1226.svg"
      />
    </div>
  );
};

BioContent.propTypes = {
  className: PropTypes.string,
};

export default BioContent;
