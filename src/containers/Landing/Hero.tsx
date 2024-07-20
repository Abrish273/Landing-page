import React from "react";
import "../../App.css";
import { HeroImg } from "../../assets";
import { Typography } from "../../components";
import { CustomBtn } from "../../components";
import ResponsiveFlexContainer from "../../components/layouts/ResponsiveFlexContainer";

const Hero: React.FC = () => {
  const handleClick = () => {
    console.log("hello from hero");
  };
  return (
    <ResponsiveFlexContainer>
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
      <div
        style={{
          maxWidth: "40vw",
          maxHeight: "30vh",
          display: "flex",
          alignItems: "center",
          marginRight: "8vw",
        }}
      >
        <img
          src={HeroImg}
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
          alt="hero"
        />
      </div>
    </ResponsiveFlexContainer>
  );
};

export default Hero;
