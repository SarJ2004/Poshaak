import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
function Banner() {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  const [currSlide, setCurrSlide] = useState(0);
  const prevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };
  const nextSlide = () => {
    setCurrSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          className=" w-[400vw] h-full flex transition-all duration-500"
          style={{ transform: `translateX(-${currSlide * 100}vw)` }}>
          <img
            className="w-screen h-full object-cover"
            src={data[currSlide]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imgTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imgThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="imgFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft className="prev" />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight className="next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
