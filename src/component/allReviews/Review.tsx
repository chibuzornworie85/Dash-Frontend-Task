import React, { FC, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoIcon from "../assets/ic_logo.svg";
import avatarIcon from "../assets/avatar.svg";
import searchIcon from "../assets/icons.svg";
import shareIcon from "../assets/Icon.svg";
import tagIcon from "../assets/Shape2.svg";
import { Content } from "./Content";

export const Review: FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  const buttonTexts = [
    "Schools",
    "Hospital",
    "Resort Park",
    "Shopping Malls",
    "Airport",
    "Train Station",
    "Nightlife",
    "Public Wifi",
    "Parking Lot",
    "Security",
    "Public Transport",
    "Bus Station",
    "Quiet",
  ];

  return (
    <>
      <div className="sticky top-0 bg-[#F2F6FD] py-[20px] lg:py-0 lg:pt-[20px] px-[15px] lg:px-[60px] flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-[40px]">
            <img src={logoIcon} alt="logo" />
            <div className="relative bg-[#F3F7FE] rounded-[6px] hidden lg:flex">
              <img
                src={searchIcon}
                alt="search"
                className="absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="search"
                placeholder="Bonny and Clyde Street, Lagos"
                className="pl-10 pr-3 py-4 bg-[#FBFAFC] border-[#D4DCF1] outline-none border rounded-[6px] text-[#484851] font-[400] text-[14px] leading-[18px] w-[778px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-[13px]">
            <p className="font-[500] text-[16px] leading-[10px] hidden lg:block">
              Welcome!
            </p>
            <img src={avatarIcon} alt="avatar" />
          </div>
        </div>
        <div className="relative bg-[#F3F7FE] rounded-[6px] flex lg:hidden">
          <img
            src={searchIcon}
            alt="search"
            className="absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="search"
            placeholder="Bonny and Clyde Street, Lagos"
            className="pl-10 pr-3 py-4 bg-[#FBFAFC] border-[#D4DCF1] outline-none border rounded-[6px] text-[#484851] font-[400] text-[14px] leading-[18px] w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#1E1E1E] font-[500] lg:text-[24px] text-[19px] lg:leading-[29.05px] leading-[19.2px]">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </p>
              <div className="flex gap-1 text-[#18181B] leading-[18px] text-[12px]">
                <span className="font-[600]">“450”</span>{" "}
                <p className="font-[500]">
                  Reviews (People are raving about the selected location)
                </p>
              </div>
            </div>
            <div className="lg:hidden flex justify-between">
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Schools
              </button>
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Hospital
              </button>
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Airport
              </button>
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Gym
              </button>
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Park
              </button>
              <button className="py-[4px] px-[8px] border-[0.2px] bg-[#FBFAFC] border-[#FBFAFC] text-[#1E1E1E] font-[400] text-[12px] leading-[13.8px]">
                Wi-Fi
              </button>
            </div>
            <div className="flex lg:gap-4 justify-between">
              <Link
                to="/create"
                className="flex items-center font-[500] text-[16px] leading-[19.36px] rounded-[6px] py-[16px] px-[40px] bg-[#3366FF] text-[#fff]"
              >
                Leave a review
              </Link>
              <button className="rounded-[6px] lg:border-[1.5px] border-[0.4px] border-[#3366FF] p-[16px]">
                <img src={shareIcon} alt={shareIcon} />
              </button>
              <button className="rounded-[6px] lg:border-[1.5px] border-[0.4px] border-[#3366FF] p-[16px]">
                <img src={tagIcon} alt={tagIcon} />
              </button>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings} className="!hidden lg:!flex">
            {buttonTexts.map((text, index) => (
              <button
                key={index}
                className="py-[4px] px-[8px] rounded-[4px] border-[0.2px] border-[#1E1E1E] text-[#1E1E1E] font-[400] text-[14px] bg-[#FBFAFC]"
              >
                {text}
              </button>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <Content />
      </div>
    </>
  );
};
