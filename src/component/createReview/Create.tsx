import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Rate, Checkbox, message } from "antd";

interface MenuItemType {
  key: string;
  label: React.ReactNode;
}

const items: MenuItemType[] = [
  {
    key: "1",
    label: <>Parrking Lot</>,
  },
  {
    key: "2",
    label: <>Free Wi-Fi</>,
  },
  {
    key: "3",
    label: <>Parking Lot</>,
  },
  {
    key: "4",
    label: <>Free Wi-Fi</>,
  },
  {
    key: "5",
    label: <>Parking Lot</>,
  },
  {
    key: "6",
    label: <>Nightlife</>,
  },
  {
    key: "7",
    label: <>Pet Store</>,
  },
  {
    key: "8",
    label: <>Nightlife</>,
  },
  {
    key: "9",
    label: <>Pet Store</>,
  },
  {
    key: "10",
    label: <>Nightlife</>,
  },
  {
    key: "11",
    label: <>Hospitals</>,
  },
  {
    key: "12",
    label: <>Childcare</>,
  },
  {
    key: "13",
    label: <>Hospitals</>,
  },
  {
    key: "14",
    label: <>Childcare</>,
  },
  {
    key: "15",
    label: <>Hospitals</>,
  },
  {
    key: "16",
    label: <>Adult Home</>,
  },
  {
    key: "17",
    label: <>Gym</>,
  },
  {
    key: "18",
    label: <>Adult Home</>,
  },
  {
    key: "19",
    label: <>Gym</>,
  },
  {
    key: "20",
    label: <>Adult Home</>,
  },
  {
    key: "21",
    label: <>School</>,
  },
  {
    key: "22",
    label: <>Security</>,
  },
  {
    key: "23",
    label: <>School</>,
  },
  {
    key: "24",
    label: <>Security</>,
  },
  {
    key: "25",
    label: <>School</>,
  },
];

const CustomMenu: FC<{ items: MenuItemType[] }> = ({ items }) => {
  return (
    <div className="bg-[#F3F7FE] border rounded-[6px] p-4 max-h-60 overflow-y-auto">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.key} className="flex items-center gap-1">
            <Checkbox />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Create: FC = () => {
  const navigate = useNavigate();
  const [postAsAnonymous, setPostAsAnonymous] = React.useState(false);
  const [reviewText, setReviewText] = React.useState("");

  const handleSubmit = () => {
    if (!postAsAnonymous) {
      message.info('Please check the "Post as Anonymous".');
      return;
    }

    console.log(reviewText);
    navigate("/review");
    message.success("Review Submitted");
  };

  return (
    <>
      <div className="bg-[#1D3045] h-[100vh] flex justify-center items-center px-[20px] lg:px-0">
        <div className="bg-[#FAFCFD] border-[#D4DCF1] flex flex-col gap-4 lg:w-[695px] p-[10px] lg:p-[20px] border rounded-[6px]">
          <div className="flex justify-center font-[500] text-[18px] leading-[24px]">
            <p>
              <p>Review Location</p>
            </p>
          </div>
          <p className="text-[#1E1E1E] leading-[24px] text-[20px] font-[500] flex gap-1">
            Bonny and Clyde Street,{" "}
            <span className="hidden lg:flex">Ajao Estate,</span>Lagos
          </p>
          <Dropdown
            overlay={<CustomMenu items={items} />}
            placement="bottomCenter"
            arrow
          >
            <Button className="flex justify-between items-center bg-[#F3F7FE] h-[50px]">
              Select Amenities <DownOutlined />
            </Button>
          </Dropdown>
          <div className="font-[500] text-[14px] leading-[16.94px] flex flex-col gap-2">
            <p>Rate location</p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#1E1E1E] font-[400] text-[14px] leading-[16.94px]">
              Write Review
            </p>
            <textarea
              onChange={(e) => setReviewText(e.target.value)}
              className="bg-[#FBFAFC] outline-none border rounded-[6px] p-[12px] w-[100%] h-[173px]"
            ></textarea>
          </div>
          <div className="font-[400] text-[14px] leading-[16.94px] text-[#484851]">
            <Checkbox onChange={(e) => setPostAsAnonymous(e.target.checked)}>
              Post as Anonymous
            </Checkbox>
          </div>
          <div className="flex gap-4 justify-between font-[500] text-[16px] leading-[19.36px]">
            <button
              className={`text-[#FFFFFF] px-[40px] py-[16px] ${
                postAsAnonymous
                  ? "bg-[#3366FF]"
                  : "bg-[#E4E9FB] disabled:bg-[#E4E9FB]"
              } rounded-[6px] w-[50%]`}
              onClick={handleSubmit}
            >
              SUBMIT
            </button>

            <button className="text-[#3366FF] px-[40px] py-[16px] border-[0.5px] border-[#5378F6] rounded-[6px] w-[50%]">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
