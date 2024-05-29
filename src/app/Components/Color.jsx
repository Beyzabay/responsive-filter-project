"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const Color = () => {
  const [dropDownColor, setdropDownColor] = useState(false);
  const ClickdropDownColor = () => {
    setdropDownColor(!dropDownColor);
  };

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
        <div>Renk</div>
      </div>
      <div>
        {dropDownColor && (
          <div id="dropdownHelper" className="overflow-y-scroll h-32">
            <div className="ml-4 mb-4 mr-4 flex flex-wrap gap-5 max-w-full">
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-red-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-orange-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-yellow-300 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-pink-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-500 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-neutral-400 border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-black border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
              <div class="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Color;
