import React from "react";
import { COLORS } from "../../constants/theme";
import Typography from "../../components/Typography";
import { MemberCard } from "../../components";

const Helping: React.FC = () => {
  return (
    <div
      style={{
        background: COLORS.btnBglight,
        padding: "2rem 7vw",
        display: "flex",
        flexDirection: "row",
        gap: "9vw",
      }}
    >
      <div
        style={{
          background: COLORS.btnBglight,
          display: "flex",
          flexDirection: "column",
          gap: "3vh"
        }}
      >
        <p>
          <Typography variant="h2" children="Helping a local" />
          <Typography
            variant="h2"
            children="business reinvent itself"
            color="text-green"
          />
        </p>
        <Typography
          variant="body2"
          children="We reached here with our hard work and dedication"
        />
      </div>
      <div>
        <div>
            <MemberCard
            />
        </div>
        <div>right bottom</div>
      </div>
    </div>
  );
};

export default Helping;
