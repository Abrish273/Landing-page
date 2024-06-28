import React from "react";
import "../../App.css";
import { HeroImg } from "../../assets";
import { Typography } from "../../components/Typography";
import { CustomBtn } from "../../components";

const Hero: React.FC = () => {
  const handleClick = () => {
    console.log("hello from hero");
  };
  return (
    <div
      className="global flex flex-col sm:gap-5 md:flex-row justify-between  mx-auto"
      style={{
        padding: "4vh 6vw",
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Typography variant="h1">Lessons and insights</Typography>
          <Typography variant="h1" color="text-green-400">
            from 8 years
          </Typography>
        </div>
        <Typography variant="body1">
          Where to grow your business as a photographer: site or social media?
        </Typography>
        <div>
          <CustomBtn onClick={handleClick} label="Submit" type="type_one" />
        </div>
      </div>
      <div style={{ maxWidth: "40vw", maxHeight: "30vh", display: "flex", alignItems: "center", marginRight: "8vw" }}>
        <img
          src={HeroImg}
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
