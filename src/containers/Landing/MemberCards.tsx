import React, { useEffect, useState } from "react";
import { MemberCard } from "../../components";

const MemberCards: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
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
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
};

export default MemberCards;
