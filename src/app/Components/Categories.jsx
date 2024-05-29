"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
const Categories = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [IsDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!IsDropdown);
  };

  return (
    <div>
      <div
        className="border-t-2 flex flex-row items-center p-4"
        data-dropdown-toggle="dropdownHelper"
        onClick={toggleDropdown}
      >
        <div className="mr-2">
          {IsDropdown ? (
            <FaChevronDown className="text-orange-500" />
          ) : (
            <FaChevronRight className="text-orange-500" />
          )}
        </div>
        <div>Kategoriler</div>
      </div>
      <div>
        {IsDropdown && (
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
                  Kadın
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
                  Erkek
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
                  Aile
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
                  Konsept
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
                  Fırsat Hediyeler
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
                  Kişiye Özel Hediyeler
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
