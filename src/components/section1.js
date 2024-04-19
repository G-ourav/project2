import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const Section1 = () => {
  return (
    <div>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"../img/Group_1094.png"})`,
        }}
        className="md:mx-20 py-10   rounded-2xl"
      >
        <h2 className="flex items-center py-2 uppercase  text-white text-2xl justify-center">
          {" "}
          our
        </h2>
        <h2 className="flex items-center py-2 uppercase text-yellow-400 text-4xl justify-center">
          {" "}
          Learning Approach
        </h2>
        <div className="grid md:grid-cols-5 text-center py-5  text-white grid-cols-2 gap-1  divide-white md:divide-x-2 divide-x-0  divide-dashed  px-5">
          <div className="flex flex-col px-2    justify-center items-center">
            <div className="bg-yellow-400 p-4 rounded-full">
              <img className="" src="../img/Layer_1.1.png" />
            </div>
            <p className=" ">
              Classes are conducted during school hours on school premises
            </p>{" "}
          </div>
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="bg-yellow-400 p-4 rounded-full">
              <img className="" src="../img/Layer_1.2.png" />
            </div>

            <p>ISC curriculum is covered fully with competitive exams</p>
          </div>
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="bg-yellow-400 p-4 rounded-full">
              <img className="" src="../img/Layer_1.3.png" />
            </div>
            <p>Saves precious time for self-study</p>
          </div>
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="bg-yellow-400 p-4 rounded-full">
              <img className="" src="../img/Layer_1.4.png" />
            </div>
            <p>Experienced faculty powered by PACE IIT & MEDICAL</p>
          </div>
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="bg-yellow-400 p-4 rounded-full">
              <img className="" src="../img/Layer_1.5.png" />
            </div>
            <p>Smaller batch size for personalized attention</p>
          </div>
        </div>
        <div className="flex py-2 justify-center items-center ">
          <div
            onClick={() => (window.location = "mailto:i")}
            className=" rounded-full flex gap-5  justify-between items-center  text-blue-900 font-bold md:text-sm text-lg p-4  bg-yellow-400"
          >
            Enquire Now
            <div className=" bg-blue-900 rounded-full p-1">
              <FaArrowRight color=" yellow" size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
