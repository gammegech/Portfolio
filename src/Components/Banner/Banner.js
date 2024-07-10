import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-10 flex items-center border-b-[1px] font-titleFont border-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
