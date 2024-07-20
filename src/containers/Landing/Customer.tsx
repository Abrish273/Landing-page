import React, { useEffect, useState } from "react";
import { Tesla, Vector } from "../../assets";
import Typography from "../../components/Typography";
import { Carousel } from "../../components";
import ResponsiveFlexContainer from "../../components/layouts/ResponsiveFlexContainer";
import { COLORS } from "../../constants/theme";

const images = [Vector, Vector, Vector, Vector, Vector];

const Customer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ResponsiveFlexContainer>
      <div
        className="left mt-8"
        style={{
          width: "100vw",
          height: "40vh",
          //   background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <img src={Tesla} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
      <div className="left flex flex-col">
        {/* <p style={{ textAlign: "center" }}> */}
        {/* </p> */}
        <Typography
          variant="body2"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        />
        <div>
          <Typography
            variant="h4"
            color={COLORS.primary}
            children="Tim Smith"
          />
          <Typography
            variant="body2"
            color={COLORS.btnGray}
            children="British Dragon Boat Racing Association"
          />
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Carousel images={images} />
          <Typography color={COLORS.primary} variant="body1" children="Meet all customers" />
        </div>
      </div>
    </ResponsiveFlexContainer>
  );
};

export default Customer;
