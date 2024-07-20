import React, { useEffect, useState } from "react";
import { Card, Typography } from "../../components";
import { COLORS } from "../../constants/theme";
import ResponsiveFlexContainer from "../../components/layouts/ResponsiveFlexContainer";
import { PersonImage } from "../../assets";

const imageList = [
  {
    img: PersonImage,
  },
  {
    img: PersonImage,
  },
  {
    img: PersonImage,
  },
];

const lists = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    description: "Read more",
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    description: "Read more",
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    description: "Read more",
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    description: "Read more",
  },
];

const Community: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ResponsiveFlexContainer flexDirection="column">
      <div>
        <Typography
          variant="h3"
          children="Community"
          textAlign="center"
          color={COLORS.btnGray}
        />

        <Typography
          variant="body2"
          textAlign="center"
          children="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
          color={COLORS.black}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: windowWidth > 949 ? "row" : "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 8,
          marginTop: "3em",
          // height: "90vh",
          fontSize: "20px",
          color: "green",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            flexDirection: windowWidth > 949 ? "row" : "column",
            gap: 60,
            // justifyContent: "space-between"
            // background: "green",
          }}
        >
          {/* Images */}
          {imageList.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <img src={image.img} style={{ width: "300px" }} alt="" />
              {/* Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: windowWidth > 768 ? "-40%" :windowWidth > 425 ? "-20%" : "10%",
                  left: "10%",
                  borderRadius: "8px",
                }}
              >
                <Card
                  key={index}
                  type="style_one"
                  variantTitle={"body2"}
                  title={lists[index].title}
                  colorProps={COLORS.primary}
                  icon={true}
                  description={lists[index].description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResponsiveFlexContainer>
  );
};

export default Community;