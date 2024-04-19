import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" md:flex md:pt-10">
      <div className="  md:pt-20 md:text-left text-center  gap-2 md:flex flex-col">
        <p className=" font-semibold pt-4   text-2xl">Kickstart Your </p>
        <p className=" text-5xl flex py-6 font-bold text-blue-900">
          IIT JEE/NEET Test Prep,
        </p>
        <div className="flex w-full justify-center  flex-col items-center">
          <p className=" text-lg  font-bold text-blue-900">Powered by</p>
          <img src="../img/pace-logo-png-1_1.png" />
        </div>
        <div className="md:grid hidden   grid-cols-2">
          <p className=" text-xl flex  items-center justify-center  font-bold ">
            Admissions Open
          </p>
          <div
            onClick={() => (window.location = "mailto:i")}
            className=" rounded-full flex  justify-between items-center  text-white  font-bold md:text-sm text-lg p-4 bg-blue-950"
          >
            Enquire Now
            <div className=" bg-yellow-400 rounded-full p-1">
              <FaArrowRight color=" black" size="20" />
            </div>
          </div>
        </div>
       
        <div className="flex gap-2 ">
          <div className=" bg-yellow-400 rounded-full p-3">
            <img src="../img/Layer_2.png" />
          </div>
          <p className=" text-xl flex  items-center justify-center  font-semibold ">
            Batch Starts From 3rd April '24
          </p>
        </div>
        <div className="flex gap-1 ">
          <div className=" bg-yellow-400 rounded-full p-3">
            <img src="../img/Layer_1.png" />
          </div>
          <p className=" text-xl flex  items-center justify-center font-semibold ">
            Scholarship Test 23rd March '24
          </p>
        </div>
      </div>
      <div className="">
        <img src="../img/Cutouts_1.png" />
      </div>
    </div>
  );
};

export default Header;
