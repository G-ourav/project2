import React from "react";

const Nav = () => {
  return (
    <div
      className="m-0  rounded-b-2xl contrast-100     bg-white   "
    >
      <div
        className="flex sm:px-20 px-5 text-slate-800 text-center  items-center
py-5   justify-between"
      >
        <div className="divide-x-2    divide-blue-950 flex gap-1 ">
          <img
            className="w-32 h-7 sm:h-full sm:w-full"
            src="../img/UHD-logo_1.png"
          />
          <img
            className="px-2 w-32 h-8 sm:h-full  sm:w-full"
            src="../img/pace-logo-png-1_1.png"
          />
        </div>
        <div
          onClick={() => (window.location = "mailto:i")}
          className=" rounded-full text-white  sm:text-sm text-xs p-4 bg-blue-950"
        >
          Get Info
        </div>
      </div>
    </div>
  );
};

export default Nav;
