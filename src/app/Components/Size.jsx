"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const Size = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [dropDownSize, setdropDownSize] = useState(false);
  const ClickdropDownSize = () => {
    setdropDownSize(!dropDownSize);
  };
  return (
    <div>
      <div
        className="border-t-2 flex flex-row items-center p-4"
        data-dropdown-toggle="dropdownHelper"
        onClick={ClickdropDownSize}
      >
        <div className="mr-2">
          {dropDownSize ? (
            <FaChevronDown className="text-orange-500" />
          ) : (
            <FaChevronRight className="text-orange-500" />
          )}
        </div>
        <div>Beden</div>
      </div>
      <div>
        {dropDownSize && (
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
                  S
                </label>
              </div>
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
                  M
                </label>
              </div>
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
                  L
                </label>
              </div>
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
                  XL
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Size;
