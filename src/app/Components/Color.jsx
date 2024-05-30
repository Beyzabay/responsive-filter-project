"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Color = () => {
  const [dropDownColor, setdropDownColor] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const ClickdropDownColor = () => {
    setdropDownColor(!dropDownColor);
  };

  const handleClick = (color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [color]: !prevSelectedColors[color],
    }));
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-orange-500",
    "bg-yellow-300",
    "bg-green-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-neutral-400",
    "bg-black",
    "bg-white",
  ];

  return (
    <div>
      <div
        className="border-t-2 flex flex-row items-center p-4"
        data-dropdown-toggle="dropdownHelper"
        onClick={ClickdropDownColor}
      >
        <div className="mr-2">
          {dropDownColor ? (
            <FaChevronDown className="text-orange-500" />
          ) : (
            <FaChevronRight className="text-orange-500" />
          )}
        </div>
        <div className="font-nunito">Renk</div>
      </div>
      <div>
        {dropDownColor && (
          <div id="dropdownHelper" className="overflow-y-scroll h-32">
            <div className="ml-4 mb-4 mr-4 flex flex-wrap gap-5 max-w-full">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => handleClick(color)}
                  className={`h-10 w-10 rounded-full ${color} border-2 ${
                    selectedColors[color] ? "border-orange-500" : "border-gray-200"
                  } cursor-pointer hover:border-orange-500`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Color;

