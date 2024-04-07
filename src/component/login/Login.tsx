import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import strokeIcon from "../assets/strock.svg";
import logoIcon from "../assets/ic_logo.svg";
import googleIcon from "../assets/Social icon.svg";
import faceBookIcon from "../assets/Social icon (1).svg";
import appleIcon from "../assets/Social icon (2).svg";
import { Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isValidEmail = (email: string): boolean => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      message.error("Please fill in both email and password.");
    } else if (!isValidEmail(email)) {
      message.error("Please enter a valid email address.");
    } else {
      navigate("/home");
      message.success("Login successful");
    }
  };

  return (
    <>
      <div className="flex justify-center bg-[#F5F5F5]">
        <div className="lg:w-[1240px] w-[343px] lg:h-[100vh]">
          <div className="flex justify-between sticky top-0 pt-[24px]">
            <img src={logoIcon} alt="logo" />
            <div className="flex items-center gap-[13px]">
              <p className="font-[600] text-[14px] leading-[16.94px] text-[#557FF2]">
                LOGIN
              </p>
            </div>
          </div>
          <div className="h-[90vh] flex justify-center items-center">
            <div className="flex flex-col gap-[15px] bg-[#FAFCFD] p-[24px]">
              <div className="flex flex-col gap-2">
                <Input
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input.Password
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
              <button
                onClick={handleLogin}
                className="px-[40px] py-[16px] bg-[#3366FF] rounded-[6px] w-[100%] text-[#fff] font-[500] text-[16px] leading-[19.36px]"
              >
                LOG IN
              </button>
              <div className="flex items-center gap-2">
                <img src={strokeIcon} alt={strokeIcon} className="w-[100%]" />
                <p>Or</p>
                <img src={strokeIcon} alt={strokeIcon} className="w-[100%]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="py-[10px] px-[16px] flex items-center justify-center gap-3 rounded-[8px] h-[44px] bg-[#FFFFFF] border">
                  <img src={googleIcon} alt={googleIcon} />
                  <p>Log in with Google</p>
                </div>
                <div className="py-[10px] px-[16px] flex items-center justify-center gap-3 rounded-[8px] h-[44px] bg-[#FFFFFF] border">
                  <img src={faceBookIcon} alt={faceBookIcon} />
                  <p>Log in with Facebook</p>
                </div>
                <div className="py-[10px] px-[16px] flex items-center justify-center gap-3 rounded-[8px] h-[44px] bg-[#FFFFFF] border">
                  <img src={appleIcon} alt={appleIcon} />
                  <p>Log in with Apple</p>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center font-[400] text-[12px] leading-[14.52px]">
                <p className="underline">Forgot your password?</p>
                <p>
                  Don’t have an account?{" "}
                  <span className="text-[#3366ff]">Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
