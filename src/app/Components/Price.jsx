"use client";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Price = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
        <div>Fiyat Aralığı</div>
      </div>
      <div>
        {dropDownPrice && (
          <div id="dropdownHelper" className="overflow-y-scroll h-32">
            <div className="ml-4 mb-4 mr-4 flex flex-col gap-4">
              <div class="flex items-center bg-gray-50">
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: "#ED8936",
                    },
                  }}
                />

                <label
                  for="checked-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900"
                >
                  Kategori 1
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
