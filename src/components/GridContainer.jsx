import "./GridContainer.css";
import React from "react";
import PropTypes from "prop-types";
const GridContainer = ({ className = "" }) => {
  return (
    <div className={`grid-container ${className}`}>
      <div className="grid-row">
        <div className="highlight-items" />
        <div className="highlight-items1" />
        <div className="grid-row1">
          <div className="highlight-items2" />
          <div className="highlight-items3" />
          <div className="grid-row2">
            <div className="highlight-items4" />
            <div className="highlight-items5" />
          </div>
        </div>
      </div>
    </div>
  );
};

GridContainer.propTypes = {
  className: PropTypes.string,
};

export default GridContainer;
