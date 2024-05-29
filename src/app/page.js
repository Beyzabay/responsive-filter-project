"use client";
import React, { useState } from "react";
import Marka from "./Components/Brand";
import Price from "./Components/Price";
import Color from "./Components/Color";
import Size from "./Components/Size";
import Categories from "./Components/Categories";

const page = () => {
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
          <div className="modal !max-h-full overflow-x-auto md:hidden visible z-50 bottom-0 left-0 right-0 sticky border">
            <div className="mt-10 flex flex-row justify-center mb-6 ">
              <h1 className="font-bold text-xl">Filtre</h1>
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
