import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const SliderClick = () => {
  const arr = [
    {
      id: 1,
      img: "../img/Rectangle_s_1.png",
      h1: "          In School Preparation",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 2,
      img: "../img/Rectangle_s_2.png",
      h1: "          Revision",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 3,
      img: "../img/Rectangle_s_3.png",
      h1: "          Mock Tests",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 4,
      img: "../img/Rectangle_s_4.png",
      h1: "          Feedback",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 5,
      img: "../img/Rectangle_s_5.png",
      h1: "          Study Material",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 6,
      img: "../img/Rectangle_s_6.png",
      h1: "          Counselling",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
    {
      id: 7,
      img: "../img/Rectangle_s_7.png",
      h1: "          Career Guidance",
      alt: "content",
      p1: "Having a strong online presence depends a lot on the content, which is often overlooked.",
    },
  ];
  const [T, setT] = useState(arr[0]);
  const r = (i = 0) => {
    setT(arr[i]);
  };
  return (
    <div className="lg2:px-32 pt-20  lg3:px-72 px-5">
      <div className="sm:flex grid grid-cols-3  justify-center -mb-5  text-center cursor-pointer  font-semibold   md:text-lg  gap-2  ">
        <a
          onClick={() => r(0)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4"
        >
          In School Preparation
        </a>
        <a
          onClick={() => r(1)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4 "
        >
          Revision
        </a>
        <a
          onClick={() => r(2)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4 "
        >
          Mock Tests
        </a>
        <a
          onClick={() => r(3)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4 "
        >
          Feedback
        </a>

        <a
          onClick={() => r(4)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4 "
        >
          Study Material
        </a>

        <a
          onClick={() => r(5)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4 px-4 "
        >
          Counselling
        </a>
        <a
          onClick={() => r(6)}
          className="hover:bg-blue-950 bg-blue-200 rounded-t-2xl duration-500 transition   ease-in-out   hover:text-yellow-200  shadow-2xl py-4  px-4"
        >
          Career Guidance{" "}
        </a>
      </div>
      <div id={T.id} className="sm:grid shadow-2xl  sm:px-20 py-10  bg-white   rounded-2xl  gap-10 grid-cols-3">
        <div className=" my-auto text-sm sm:text-left  text-center md:text-lg   col-span-2">
          <h2 className=" text-2xl font-semibold text-blue-900">{T.h1}</h2>
          <p className="py-1">
            Lectures will happen on campus during school hours with our esteemed
            faculty powered by PACE, so students don’t need to go anywhere for
            extra coaching or tuition classes.
          </p>
          <div className="flex py-2  justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-4  hover:bg-blue-100 justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
            >
              Enquire Now
              <div className=" bg-yellow-400 rounded-full p-1">
                <FaArrowRight color=" black" size="20" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="sm:px-0 px-5 col-span-1"
          src={T.img}
          alt={T.alt}
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default SliderClick;
