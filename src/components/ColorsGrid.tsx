import React, { Component } from "react";
import "./index.css";
export const ColorsGrid = ({title, colors}) => {


  // static propTypes = {};
  // static defaultProps = {};


  return (
    <div className="color-section">
      <h3>{title}</h3>
      <div className="colors-container">
        {colors.map((color, key) => (
          <div>
            <div className="colors-container__wrapper">
              <div>
                <div className="color"></div>
                <div className="color-description">
                  <p className="key-color">{key}</p>
                  <p className="hex-color">{color}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
