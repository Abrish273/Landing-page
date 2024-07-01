import React from "react";
import { UseFlexColumnBelowWidth } from "../utils";

interface CardProps {
  variant?: "default" | "outlined";
  borderColor?: string;
  backgroundColor?: string;
  padding?: string;
}

const Card: React.FC<CardProps> = ({
  variant = "default",
  borderColor = "#000000",
  backgroundColor = "#FFFFFF",
  padding = "1rem",
  children,
}) => {
  const isMobile = UseFlexColumnBelowWidth(480); // Mobile breakpoint
  const isTablet = UseFlexColumnBelowWidth(768); // Tablet breakpoint
  const isLaptop = UseFlexColumnBelowWidth(1024); // Laptop breakpoint
  const isDesktop = UseFlexColumnBelowWidth(1440); // Desktop breakpoint

  const getCardStyles = () => {
    let boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    let borderRadius = "8px";

    if (isMobile) {
      boxShadow = "none"; // No box shadow on mobile
      borderRadius = "4px"; // Smaller border radius on mobile
    }

    switch (variant) {
      case "default":
        return {
          border: `1px solid ${borderColor}`,
          backgroundColor,
          padding,
          boxShadow,
          borderRadius,
        };
      case "outlined":
        return {
          border: `2px dashed ${borderColor}`,
          backgroundColor,
          padding,
          borderRadius,
        };
      default:
        return {
          border: `1px solid ${borderColor}`,
          backgroundColor,
          padding,
          boxShadow,
          borderRadius,
        };
    }
  };

  return <div style={{ ...getCardStyles(), width: "100%" }}>{children}</div>;
};

export default Card;



/*
   <div>

      {/*
     
      {/* <Card variant="default" backgroundColor="#F0F0F0" borderColor="#CCCCCC">
        <div>
          <h3>Title</h3>
          <p>This is a default card.</p>
        </div>
      </Card>

      <Card
        variant="outlined"
        backgroundColor="#FFFFFF"
        borderColor="#FF5733"
        padding="0.5rem"
      >
        <h3>Title</h3>
        <p>This is an outlined card.</p>
      </Card> 
   // </div>*/