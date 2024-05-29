"use client";
import React, { useState, useEffect, useRef } from "react";
import Marka from "./Components/Brand";
import Price from "./Components/Price";
import Color from "./Components/Color";
import Size from "./Components/Size";
import Categories from "./Components/Categories";
import { IoMdClose } from "react-icons/io";

const Page = () => {
  const [state, setState] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = () => {
    setState(!state);
  };

  const handleCloseModal = () => {
    setState(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (state) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mt-52 relative w-52">
        <button
          className="bg-orange-500 rounded-full border-2 border-gray-200 text-white p-2"
          onClick={handleButtonClick}
        >
          Filtrele
        </button>
      </div>
      {state && (
        <div
          ref={modalRef}
          className="modal max-h-96 overflow-y-auto md:hidden visible z-50 fixed inset-x-0 bottom-0 border bg-white"
        >
          <div className="sticky top-0 bg-gray-50 border-b z-10 flex justify-between items-center p-4">
            <h1 className="font-bold text-xl flex-grow text-center">Filtre</h1>
            <button onClick={handleCloseModal} className="text-xl absolute right-4 top-4">
              <IoMdClose className="size-8" />
            </button>
          </div>
          <div className="px-4 pb-4">
            <Categories />
            <Size />
            <Color />
            <Marka />
            <Price />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

