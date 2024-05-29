"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { orange, pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const page = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [state, setState] = useState(true);
  const [IsDropdown, setIsDropdown] = useState(false);
  const [dropDownSize, setdropDownSize] = useState(false);
  const [dropDownColor, setdropDownColor] = useState(false);
  const [dropDownBrand, setdropDownBrand] = useState(false); 
  const [dropDownPrice, setdropDownPrice] = useState(false);

  const handleButtonClick = () => {
    setState(true);
  };
  const toggleDropdown = () => {
    setIsDropdown(!IsDropdown);
  };
  const ClickdropDownSize = () => {
    setdropDownSize(!dropDownSize);
  };

  const ClickdropDownColor = () => {
    setdropDownColor(!dropDownColor);
  };

  const ClickdropDownBrand = () => {
    setdropDownBrand(!dropDownBrand);
  };

  const ClickdropDownPrice = () => {
    setdropDownPrice(!dropDownPrice);
  };
  return (
    <>
      <div className="flex flex-col !mt-52 relative">
        <button onClick={handleButtonClick}>Filter Button</button>
      </div>
      <div>
        {state && (
          <div className="modal !max-h-96 overflow-x-auto md:hidden visible z-50 bottom-0 left-0 right-0 absolute bg-white border">
            <div className="mt-10 flex flex-row justify-center mb-10">
              Filtre
            </div>
            <div>
              {/* kategori */}
              <div>
                <div
                  className="border-t-2 flex flex-row items-center p-4"
                  data-dropdown-toggle="dropdownHelper"
                  onClick={toggleDropdown}
                >
                  <div className="mr-2">
                    {IsDropdown ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  <div>Kategori</div>
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
                            Kategori 1
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
                            Kategori 2
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
                            Kategori 3
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
                            Kategori 4
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
                            Kategori 5
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* beden */}
              <div>
                <div
                  className="border-t-2 flex flex-row items-center p-4"
                  data-dropdown-toggle="dropdownHelper"
                  onClick={ClickdropDownSize}
                >
                  <div className="mr-2">
                    {dropDownSize ? <FaChevronDown /> : <FaChevronRight />}
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
                            Kategori 1
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* renk */}
              <div>
                <div
                  className="border-t-2 flex flex-row items-center p-4"
                  data-dropdown-toggle="dropdownHelper"
                  onClick={ClickdropDownColor}
                >
                  <div className="mr-2">
                    {dropDownColor ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  <div>Renk</div>
                </div>
                <div>
                  {dropDownColor && (
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
              {/* marka */}
              <div>
                <div
                  className="border-t-2 flex flex-row items-center p-4"
                  data-dropdown-toggle="dropdownHelper"
                  onClick={ClickdropDownBrand}
                >
                  <div className="mr-2">
                    {dropDownBrand ? <FaChevronDown /> : <FaChevronRight />}
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
                            Kategori 1
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* fiyat */}
              <div>
                <div
                  className="border-t-2 flex flex-row items-center p-4"
                  data-dropdown-toggle="dropdownHelper"
                  onClick={ClickdropDownPrice}
                >
                  <div className="mr-2">
                    {dropDownPrice ? <FaChevronDown /> : <FaChevronRight />}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
