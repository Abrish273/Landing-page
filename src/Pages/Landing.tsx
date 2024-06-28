import React from "react";
import {
  Helping,
  Hero,
  MemberCards,
  Navbar,
  OurClients,
  Unseen,
} from "../containers";

const Landing: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
      <Navbar />
      <Hero />
      <OurClients />
      <MemberCards />
      <Unseen />
      <Helping />
      <br />
      how to design
    </div>
  );
};

export default Landing;
