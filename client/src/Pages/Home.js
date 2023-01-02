import React from "react";
import AdBanner from "../Components/AdBanner/AdBanner";
import BannerSlider from "../Components/BannerSlider/BannerSlider";
import Latest from "../Components/Products/Sliders/Latest";
import Trending from "../Components/Products/Sliders/Trending";
import Popular from "../Components/Products/Sliders/Popular";

const Home = () => {
  return (
    <div className="pt-10 pb-40">
      <BannerSlider />
      <div className="max-w-[1400px] px-5 mx-auto">
        <div className="pt-14">
          <Latest />
        </div>
        <div className="pt-14">
          <AdBanner />
        </div>
        <div className="pt-14">
          <Trending />
        </div>
        <div className="pt-14">
          <Popular />
        </div>
        <div className="pt-14">
          <AdBanner />
        </div>
      </div>
    </div>
  );
};

export default Home;
