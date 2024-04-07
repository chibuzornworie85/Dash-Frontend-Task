import React, { FC } from "react";
import UserIcon from "../assets/Ellipse 1.svg";
import RatingIcon from "../assets/Rating.svg";
import MessageIcon from "../assets/message1.svg";
import ThumbUpIcon from "../assets/thumbup.svg";
import ThumbDownIcon from "../assets/thumbdown.svg";
import LineIcon from "../assets/line.svg";
import picImage from "../assets/Placeholder Image.svg";
import pic2Image from "../assets/Placeholder Image (1).svg";
import pic3Image from "../assets/Placeholder Image (2).svg";
import pic4Image from "../assets/Frame 46.svg";
import mobilePic from "../assets/Place.svg";
import mobilePic2 from "../assets/Place(1).svg";
import mobilePic3 from "../assets/Place(2).svg";

interface ReviewProps {
  userName: string;
  rating: string;
  date: string;
  content: string;
  likes: number;
  dislikes: number;
  comments: number;
}

const Review: FC<ReviewProps> = ({
  userName,
  rating,
  date,
  content,
  likes,
  dislikes,
  comments,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={UserIcon} alt="User" />
          <p className="text-[14px] leading-[16.1px] text-[#1E1E1E] font-[700]">
            {userName}
          </p>
          <p className="text-[14px] font-[400] leading-[16.1px] text-[#1E1E1E99]">
            {date}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={RatingIcon} alt="Rating" />
          <p className="text-[#1E1E1E] font-[400] text-[14px] leading-[16.1px]">
            {rating}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#18181B] font-[400] leading-[24px] text-[16px]">
          {content}
        </p>
      </div>
      <div className="flex items-center gap-4 text-[#0D2159] font-[400] text-[14px] leading-[16.1px]">
        <div className="flex items-center gap-1">
          <img src={ThumbUpIcon} alt="Thumb Up" />
          <p>{likes}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={ThumbDownIcon} alt="Thumb Down" />
          <p>{dislikes}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={MessageIcon} alt="Message" />
          <p>{comments}</p>
        </div>
      </div>
      <img src={LineIcon} alt="Line" />
    </div>
  );
};

export const Content: FC = () => {
  const reviews = [
    {
      userName: "James T.",
      rating: "4.0",
      date: "5 months ago",
      content:
        "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      likes: 1224,
      dislikes: 24,
      comments: 24,
    },
    {
      userName: "Taiwo O. (Admin)",
      rating: "4.0",
      date: "5 months ago",
      content:
        "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      likes: 1000,
      dislikes: 24,
      comments: 24,
    },
    {
      userName: "James T.",
      rating: "4.0",
      date: "5 months ago",
      content:
        "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      likes: 214,
      dislikes: 24,
      comments: 24,
    },
    {
      userName: "James T.",
      rating: "4.0",
      date: "5 months ago",
      content:
        "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      likes: 1000,
      dislikes: 4,
      comments: 24,
    },
  ];

  return (
    <div className="flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-between py-[30px] lg:px-[60px] px-[15px]">
      <div className="flex flex-col gap-3 lg:w-[722px]">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
      <div>
        <div className="lg:grid grid-cols-2 gap-4 hidden">
          <img src={picImage} alt={picImage} className="rounded-[8px]" />
          <img src={pic2Image} alt={pic2Image} className="rounded-[8px]" />
          <img src={pic3Image} alt={pic3Image} className="rounded-[8px]" />
          <img src={pic4Image} alt={pic4Image} className="rounded-[8px]" />
        </div>
        <div className="flex gap-2 lg:hidden">
          <img src={mobilePic} alt={mobilePic} className="rounded-[8px]" />
          <div className="flex flex-col gap-2">
            <img src={mobilePic2} alt={mobilePic2} className="rounded-[8px]" />
            <img src={mobilePic3} alt={mobilePic3} className="rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
