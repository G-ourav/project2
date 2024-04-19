import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider2() {
  const slides = [
    {
      url1: "../img/Rectangle_s1_1.png",
      url2: "../img/Rectangle_s1_2.png",
      url3: "../img/Rectangle_s1_3.png",
      url4: "../img/Rectangle_s1_4.png",
      url5: "../img/Rectangle_s1_5.png",
      url6: "../img/Rectangle_s1_6.png",
    },
    {
        url1: "../img/Rectangle_s2_1.png",
        url2: "../img/Rectangle_s2_2.png",
        url3: "../img/Rectangle_s2_3.png",
        url4: "../img/Rectangle_s2_4.png",
        url5: "../img/Rectangle_s2_5.png",
        url6: "../img/Rectangle_s2_6.png",
    },
    {
        url1: "../img/Rectangle_s3_1.png",
        url2: "../img/Rectangle_s3_2.png",
        url3: "../img/Rectangle_s3_3.png",
        url4: "../img/Rectangle_s3_4.png",
        url5: "../img/Rectangle_s3_5.png",
        url6: "../img/Rectangle_s3_6.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndex_1, setCurrentIndex_1] = useState(0);
  // const [currentIndex_2, setCurrentIndex_2] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length : currentIndex - 1;
    // setCurrentIndex_1(isFirstSlide ? slides.length - 2 : currentIndex - 2)
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    // setCurrentIndex_1(isLastSlide ? 1 : currentIndex + 2)
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] md:h-[780px] h-[450px] md:w-full m-auto py-16 px-4 relative group">
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        // className="w-full h-full  rounded-2xl bg-center bg-cover duration-500"
        className=" flex  flex-col overflow-hidden items-center justify-center gap-4"
      >
        {/* <h4 className="absolute m-10  text-5xl font-black transition-all duration-500 ease-in-out transform scale-100 text-gray-900  hover:scale-75">
          {slides[currentIndex].title}
        </h4> */}

     
        <div className="flex  items-center justify-center gap-4">
          <img src={slides[currentIndex].url1} />
       
          <img src={slides[currentIndex].url2} />
       
          <img src={slides[currentIndex].url3} />
        </div>
        <div className="flex  items-center justify-center gap-4">
          <img src={slides[currentIndex].url4} />
       
          <img src={slides[currentIndex].url5} />
       
          <img src={slides[currentIndex].url6} />
        </div>
      </div>

      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider2;
