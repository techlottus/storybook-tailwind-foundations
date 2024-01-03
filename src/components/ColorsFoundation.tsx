import React, { Component } from "react";
import { ColorsGrid } from "./ColorsGrid.tsx";
import "./index.css";
export const ColorsFoundation = ({colors}) => {

  const getRootColors = () => {
    let rootColors = {}
    for (let key in colors) {
      if (colors[key]) {
        rootColors[key] = colors[key]
      }
    }
    return rootColors
  }

  return <div className="colors-container">
      {colors.map((color: string, key: string) => (
        <div>
          <div>
            <ColorsGrid colors={color} title={key}></ColorsGrid>
          </div>
        </div>
      ))}
      <ColorsGrid
        colors={getRootColors()}
        title="Root Colors"
        use-default-background-color={true}
      ></ColorsGrid>
    </div>

}
