import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

// Kategoriler bileşeni
const Categories = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Dropdown'ı aç/kapat fonksiyonu
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Kategori seçimi
  const handleCategorySelection = (label) => {
    if (selectedCategories.includes(label)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== label));
    } else {
      setSelectedCategories([...selectedCategories, label]);
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
        <div className="font-nunito">Kategoriler</div>
      </div>
      <div>
        {/* Dropdown içeriği */}
        {isDropdown && (
          <div id="dropdownHelper" className="overflow-y-scroll h-32">
            <div className="ml-4 mb-4 mr-4 flex flex-col gap-4">
              {/* Kategori öğeleri */}
              <CategoryItem
                label="Kadın"
                isSelected={selectedCategories.includes("Kadın")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="Erkek"
                isSelected={selectedCategories.includes("Erkek")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="Aile"
                isSelected={selectedCategories.includes("Aile")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="Konsept"
                isSelected={selectedCategories.includes("Konsept")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="Fırsat Hediyeler"
                isSelected={selectedCategories.includes("Fırsat Hediyeler")}
                handleCategorySelection={handleCategorySelection}
              />
              <CategoryItem
                label="Kişiye Özel Hediye"
                isSelected={selectedCategories.includes("Kişiye Özel Hediye")}
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

export default Categories;



