"use client";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Marka = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [dropDownBrand, setdropDownBrand] = useState(false);

  const ClickdropDownBrand = () => {
    setdropDownBrand(!dropDownBrand);
  };
  return (
    <>
      <div>
        <div
          className="border-t-2 flex flex-row items-center p-4"
          data-dropdown-toggle="dropdownHelper"
          onClick={ClickdropDownBrand}
        >
          <div className="mr-2">
            {dropDownBrand ? (
              <FaChevronDown className="text-orange-500" />
            ) : (
              <FaChevronRight className="text-orange-500" />
            )}
          </div>
          <div>Marka</div>
        </div>
        <div>
          {dropDownBrand && (
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
                    Adidas
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
                    Puma
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
                    Bershka
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
                    Pull and Bear
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
                    Lumberjack
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Marka;
