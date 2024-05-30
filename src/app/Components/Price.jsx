"use client";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import RangeSlider from "./RangeSlider";

const Price = () => {
  const [dropDownPrice, setdropDownPrice] = useState(false);

  const ClickdropDownPrice = () => {
    setdropDownPrice(!dropDownPrice);
  };
  return (
    <div>
      <div
        className="border-t-2 flex flex-row items-center p-4"
        data-dropdown-toggle="dropdownHelper"
        onClick={ClickdropDownPrice}
      >
        <div className="mr-2">
          {dropDownPrice ? (
            <FaChevronDown className="text-orange-500" />
          ) : (
            <FaChevronRight className="text-orange-500" />
          )}
        </div>
        <div className="font-nunito">Fiyat Aralığı</div>
      </div>
      <div>
        {dropDownPrice && (
          <div id="dropdownHelper">
            <div className="ml-4 mb-4 mr-4 flex flex-col gap-4 items-center mt-2">
                <RangeSlider/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
