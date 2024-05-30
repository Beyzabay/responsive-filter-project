import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

// Kategoriler bileşeni
const Size = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedSize, setSelectedSize] = useState([]);

  // Dropdown'ı aç/kapat fonksiyonu
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Kategori seçimi
  const handleCategorySelection = (label) => {
    if (selectedSize.includes(label)) {
      setSelectedSize(selectedSize.filter((item) => item !== label));
    } else {
      setSelectedSize([...selectedSize, label]);
    }
  };

  return (
    <div>
      {/* Dropdown başlığı */}
      <div
        className="border-t-2 flex flex-row items-center p-4"
        data-dropdown-toggle="dropdownHelper"
        onClick={toggleDropdown}
      >
        <div className="mr-2">
          {isDropdown ? (
            <FaChevronDown className="text-orange-500" />
          ) : (
            <FaChevronRight className="text-orange-500" />
          )}
        </div>
        <div className="font-nunito">Beden</div>
      </div>
      <div>
        {/* Dropdown içeriği */}
        {isDropdown && (
          <div id="dropdownHelper" className="overflow-y-scroll h-32">
            <div className="ml-4 mb-4 mr-4 flex flex-col gap-4">
              {/* Kategori öğeleri */}
              <CategoryItem
                label="S"
                isSelected={selectedSize.includes("S")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="M"
                isSelected={selectedSize.includes("M")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="L"
                isSelected={selectedSize.includes("L")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="XL"
                isSelected={selectedSize.includes("XL")}
                handleCategorySelection={handleCategorySelection}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Kategori öğesi bileşeni
const CategoryItem = ({ label, isSelected, handleCategorySelection }) => {
  return (
    <div
      className="flex items-center bg-gray-50"
      onClick={() => handleCategorySelection(label)}
      style={{ cursor: "pointer" }}
    >
      {/* Checkbox */}
      <Checkbox
        checked={isSelected}
        onChange={() => handleCategorySelection(label)}
        sx={{
          "&.Mui-checked": {
            color: "#ED8936",
          },
        }}
      />
      {/* Kategori etiketi */}
      <label
        className="ms-2 text-sm font-medium text-gray-900 font-nunito"
      >
        {label}
      </label>
    </div>
  );
};

export default Size;