"use client";
import React, { useState } from "react";
import Marka from "./Components/Marka";
import Price from "./Components/Price";
import Color from "./Components/Color";
import Size from "./Components/Size";
import Categories from "./Components/Categories";

const page = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [state, setState] = useState(true);

  const handleButtonClick = () => {
    setState(true);
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
              <div>
                <Categories />
              </div>

              <div>
                <Size />
              </div>

              <div>
                <Color />
              </div>
              <div>
                <Marka />
              </div>

              <div>
                <Price />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
