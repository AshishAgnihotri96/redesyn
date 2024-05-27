import "./GridContainer.css";
import React from "react";
import PropTypes from "prop-types";
const GridContainer = ({ className = "" }) => {
  return (
    <div className={`grid-container1`}>
      <div className="grid-row1">
        <div className={`outer-container ${className}`}>
          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
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
