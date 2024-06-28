import React from "react";
import "../../App.css";
import Typography from "../../components/Typography";
import { OurClients as Client, Vector } from "../../assets";
import { Carousel } from "../../components";

const images = [Client, Vector, Client, Client, Client];
const OurClients: React.FC = () => {
  return (
    <div className="global flex-col gap-5">
      <div>
        <Typography variant="h1">Our Clients</Typography>
      </div>
      <p style={{textAlign: "center"}}>
        <Typography variant="body1">
          We have been working with some Fortune 500+ clients
        </Typography>
      </p>
      <div className="container mx-auto mt-8">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default OurClients;
