import React, { FC } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/ic_logo.svg";
import avatarIcon from "../assets/avatar.svg";
import searchIcon from "../assets/icons.svg"; 
import userIcon from "../assets/Ellipse 1.svg";
import rateIcon from "../assets/Frame 35.svg";
import messageIcon from "../assets/message.svg";
import thumbUpIcon from "../assets/Shape.svg";
import thumbDownIcon from "../assets/Shape1.svg";

type CardData = {
  id: number;
  userFeedback: string;
  feedbackTime: string;
  location: string;
  details: string;
  thumbsUp: number;
  thumbsDown: number;
  messages: number;
  tag: string;
  tagBgColor: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "traffic",
    tagBgColor: "#F5E9CB",
  },
  {
    id: 2,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "traffic",
    tagBgColor: "#F5E9CB",
  },
  {
    id: 3,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "network",
    tagBgColor: "pink",
  },
  {
    id: 4,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "traffic",
    tagBgColor: "#F5E9CB",
  },
  {
    id: 5,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "power",
    tagBgColor: "red",
  },
  {
    id: 6,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "water",
    tagBgColor: "#d1e4fa",
  },
  {
    id: 7,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "security",
    tagBgColor: "#e3deed",
  },
  {
    id: 8,
    userFeedback: "James T.",
    feedbackTime: "5 months ago",
    location: "Ikate, Lekki",
    details:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    thumbsUp: 24,
    thumbsDown: 2,
    messages: 125,
    tag: "road",
    tagBgColor: "#f8f5f2",
  },
];

export const Home: FC = () => {
  return (
    <>
      <div className="bg-[#FAFCFD] flex justify-center">
        <div className="lg:w-[1240px] w-[343px] lg:h-[1024px] bg-[#FAFCFD]">
          {/* Header Nav */}
          <div className="flex justify-between sticky top-0 bg-[#FAFCFD] pt-[24px] lg:pt-0">
            <img src={logoIcon} alt="logo" />
            <div className="flex items-center gap-[13px]">
              <p className="font-[500] text-[16px] leading-[10px] hidden lg:block">Welcome!</p>
              <img src={avatarIcon} alt="avatar" />
            </div>
          </div>
          {/* Main Content */}
          <div className="flex justify-between items-center lg:h-[100%] h-[90vh]">
            <div className="flex flex-col gap-[16px] lg:gap-[40px]">
              <div className="flex flex-col gap-[16px] lg:gap-[40px] lg:w-[507px] lg:h-[281px]">
                <h1 className="text-[#1E1E1E] font-[700] lg:text-[64px] text-[40px] leading-[48px] lg:leading-[77.45px]">
                  Find a place you will love to live!
                </h1>
                <p className="font-[400] text-[16px] lg:text-[24px] leading-[25.6px] lg:leading-[29.05px]">
                  See through the lenses of people who have lived or visited the
                  neighbourhood you might have in mind.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:gap-5">
                <div className="relative bg-[#F3F7FE] rounded-[6px]">
                  <img
                    src={searchIcon}
                    alt="search"
                    className="absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    type="search"
                    placeholder="Enter Address"
                    className="pl-10 pr-3 py-4 bg-[#F3F7FE] outline-none border border-[#D4DCF1] rounded-[6px] text-[#484851] font-[400] text-[14px] leading-[18px] w-full"
                  />
                </div>
                <Link to="/review">
                  <button className="py-[16px] px-[40px] bg-[#3366FF] text-[#fff] rounded-[6px] w-[146px]">
                    SEARCH
                  </button>
                </Link>
              </div>
            </div>
            {/* Cards */}
            <div className="lg:grid grid-cols-2 gap-5 hidden">
              {cardData.map((card) => (
                <div key={card.id} className="box w-[220px] h-[233px] flex flex-col gap-[8px] border rounded-[15px] p-[10px]">
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <img src={userIcon} alt="user" />
                      <div className="flex flex-col">
                        <p className="text-[12px] font-[500] leading-[14.52px]">{card.userFeedback}</p>
                        <p className="font-[300] text-[8px] leading-[9.68px]">{card.feedbackTime}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[500] leading-[15.4px]">{card.location}</p>
                      <img src={rateIcon} alt="rating" />
                    </div>
                  </div>
                  <p className="text-[#1E1E1E] text-[14px] font-[400] leading-[19.6px]">{card.details}</p>
                  <div className="flex justify-between">
                    <div className="flex gap-2 font-[500] text-[10px] leading-[12.1px]">
                      <div className="flex items-center gap-1">
                        <img src={thumbUpIcon} alt="like" /> {card.thumbsUp}
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={thumbDownIcon} alt="dislike" /> {card.thumbsDown}
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={messageIcon} alt="message" /> {card.messages}
                      </div>
                    </div>
                    <div style={{ backgroundColor: card.tagBgColor }} className="font-[500] text-[9px] leading-[10px] text-[#221618] rounded-[7px] border-[0.5px] py-[2px] px-[20px]">
                      {card.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
