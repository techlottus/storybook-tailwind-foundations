import React, { Component } from "react";
import "./index.css";
export const ColorsGrid = ({title, colors}) => {

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
// @import "../assets/main.css";

// h3 {
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   text-transform: capitalize;
//   color: #52525b;
//   width: 10rem;

// }

// .color-section {
//   border-radius: .75rem;
//   margin-bottom: 2rem;
//   display: flex;
//   flex-direction: column;

// }

// .colors-container {
//   display: grid;
//   justify-content: center;
//   row-gap: .75rem;
//   column-gap: 1rem;
//   flex: 1 1 0%;
//   min-width: 0;
//   grid-template-columns: repeat(5,minmax(0,1fr));
//   font-size: .75rem;
//   line-height: 1rem;
// }

// .colors-container__wrapper {
//   display: flex;
//   position: relative;
// }


// .color-description {
//   display: flex;
//   flex-direction: column;
//   margin-top: 1rem;
//   color: #52525b;
//   padding-left: .125rem;
//   padding-right: .125rem;
// }

// .color {
//   width: 100%;
//   border-radius: .25rem;
//   height: 2.5rem;
//   box-sizing: border-box;
//   border: 0 solid #e5e7eb;
// }

// .hex-color {
//   color: #64748BFF;
//   font-weight: 500;
//   text-transform: lowercase;
// }

// .key-color {
//   color: #232b3c;
//   width: 1.5rem;
//   font-weight: 100;
// }


// @media only screen and (min-width: 640px) {
//   .color-section {
//     flex-direction: row;
//   }
// }

// @media only screen and (min-width: 768px) {
//   .color-description {
//     flex-direction: row;
//     justify-content: space-between;
//     gap: 1.5rem;
//   }
// }

// @media only screen and (min-width: 1024px) {
//   .colors-container {
//     grid-template-columns: repeat(10, minmax(0,1fr));
//   }

//   .color-description {
//     display: block;
//   }
// }