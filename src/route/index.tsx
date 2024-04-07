import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../component/homePage/Home";
import { Review } from "../component/allReviews/Review";
import { Create } from "../component/createReview/Create";

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};
