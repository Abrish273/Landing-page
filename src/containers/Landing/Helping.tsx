import React from "react";
import { COLORS } from "../../constants/theme";
import Typography from "../../components/Typography";
import { Card, MemberCard } from "../../components";
import ResponsiveFlexContainer from "../../components/layouts/ResponsiveFlexContainer";
import { Member, Person } from "../../assets";

const lists = [
  {
    imageSrc: Person,
    title: "2,245,341",
    description: "Memeber",
  },
  {
    imageSrc: Person,
    title: "2,245,341",
    description: "Memeber",
  },
  {
    imageSrc: Person,
    title: "2,245,341",
    description: "Memeber",
  },
  {
    imageSrc: Person,
    title: "2,245,341",
    description: "Memeber",
  },
];

const Helping: React.FC = () => {
  return (
    <ResponsiveFlexContainer style={{ backgroundColor: "" }}>
      <div
        style={{
          // background: COLORS.btnBglight,
          display: "flex",
          flexDirection: "column",
          gap: "3vh",
          // justifyContent: "flex-start"
        }}
      >
        <p>
          <Typography variant="h2" children="Helping a local" />
          <Typography
            variant="h2"
            color={COLORS.primary}
            children="business reinvent itself"
          />
        </p>
        <Typography
          variant="body2"
          children="We reached here with our hard work and dedication"
        />
      </div>
      <div>
        <div style={{display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center"}}>
          {/** */}

          {lists.map((list, index) => (
            <Card
              key={index}
              type="style_two"
              imageSrc={list.imageSrc}
              title={list.title}
              description={list.description}
            />
          ))}
          {/* <Card
            imageSrc={Member}
            title="100"
            description="Memeber"
          /> */}

          {/** */}
        </div>
        {/* <div>right bottom</div> */}
      </div>
    </ResponsiveFlexContainer>
  );
};

export default Helping;
