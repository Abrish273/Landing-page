import React from "react";
import {
  Community,
  Customer,
  Design,
  Helping,
  Hero,
  MemberCards,
  // Navbar,
  OurClients,
  Unseen,
} from "../containers";

const Landing: React.FC = () => {
    // const { loading, error, products } = useSelector(
    //   (state: RootState) => state.search
    // );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
      {/* <Navbar /> */}
      <Hero />
      <OurClients />
      <MemberCards />
      <Unseen />
      <Helping />
      <Design />
      <Customer />
      <Community />
      <div style={{
        marginBottom: "10vh",
      }}/>
    </div>
  );
};

export default Landing;
