import React from "react";

const BodyPart = ({ x, y, width, height, type, selectedParts, toggleSelection, shape = "rect" }) => {
  const defaultColor = "#4A90E2"; // Açık mavi
  const selectedColor = "red";
  const isSelected = selectedParts.includes(type);

  return shape === "rect" ? (
    <rect
      x={x} y={y} width={width} height={height}
      fill={isSelected ? selectedColor : defaultColor}
      onClick={() => toggleSelection(type)}
      className="cursor-pointer transition-all duration-200 ease-in-out"
    />
  ) : (
    <circle
      cx={x} cy={y} r={width / 2}
      fill={isSelected ? selectedColor : defaultColor}
      onClick={() => toggleSelection(type)}
      className="cursor-pointer transition-all duration-200 ease-in-out"
    />
  );
};

export default BodyPart;
