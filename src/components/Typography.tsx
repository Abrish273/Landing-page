import React from "react";
import { UseFlexColumnBelowWidth } from "../utils";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6";
  color?: string;
  fontWeight?: "normal" | "bold";
  textAlign?: "left" | "center" | "right";
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  color = "#000000", // Default color is black
  fontWeight = "normal",
  textAlign = "left",
  children,
}) => {
  const isMobile = UseFlexColumnBelowWidth(480); // Example: Mobile breakpoint
  const isTablet = UseFlexColumnBelowWidth(768); // Example: Tablet breakpoint
  const isLaptop = UseFlexColumnBelowWidth(1024); // Example: Laptop breakpoint
  const isDesktop = UseFlexColumnBelowWidth(1440); // Example: Desktop breakpoint

  const getTypographyStyles = () => {
    switch (variant) {
      case "h1":
        return {
          fontSize: isMobile
            ? "2rem"
            : isTablet
            ? "2.5rem"
            : isLaptop
            ? "3rem"
            : isDesktop
            ? "4rem"
            : "2.5rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "h2":
        return {
          fontSize: isMobile
            ? "1.8rem"
            : isTablet
            ? "2rem"
            : isLaptop
            ? "2.5rem"
            : isDesktop
            ? "3rem"
            : "2rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "h3":
        return {
          fontSize: isMobile
            ? "1.5rem"
            : isTablet
            ? "1.8rem"
            : isLaptop
            ? "2rem"
            : isDesktop
            ? "2.5rem"
            : "1.8rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "h4":
        return {
          fontSize: isMobile
            ? "1.2rem"
            : isTablet
            ? "1.5rem"
            : isLaptop
            ? "1.8rem"
            : isDesktop
            ? "2rem"
            : "1.5rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "h5":
        return {
          fontSize: isMobile
            ? "1rem"
            : isTablet
            ? "1.2rem"
            : isLaptop
            ? "1.5rem"
            : isDesktop
            ? "1.8rem"
            : "1.2rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "h6":
        return {
          fontSize: isMobile
            ? "0.8rem"
            : isTablet
            ? "1rem"
            : isLaptop
            ? "1.2rem"
            : isDesktop
            ? "1.5rem"
            : "1rem",
          color,
          fontWeight: "bold",
          textAlign,
          lineHeight: 1.2,
        };
      case "body1":
        return {
          fontSize: isMobile
            ? "0.9rem"
            : isTablet
            ? "1rem"
            : isLaptop
            ? "1.2rem"
            : isDesktop
            ? "1.5rem"
            : "1rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      case "body2":
        return {
          fontSize: isMobile
            ? "0.8rem"
            : isTablet
            ? "0.9rem"
            : isLaptop
            ? "1rem"
            : isDesktop
            ? "1.2rem"
            : "0.9rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      case "body3":
        return {
          fontSize: isMobile
            ? "0.7rem"
            : isTablet
            ? "0.8rem"
            : isLaptop
            ? "0.9rem"
            : isDesktop
            ? "1rem"
            : "0.8rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      case "body4":
        return {
          fontSize: isMobile
            ? "0.6rem"
            : isTablet
            ? "0.7rem"
            : isLaptop
            ? "0.8rem"
            : isDesktop
            ? "0.9rem"
            : "0.7rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      case "body5":
        return {
          fontSize: isMobile
            ? "0.5rem"
            : isTablet
            ? "0.6rem"
            : isLaptop
            ? "0.7rem"
            : isDesktop
            ? "0.8rem"
            : "0.6rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      case "body6":
        return {
          fontSize: isMobile
            ? "0.4rem"
            : isTablet
            ? "0.5rem"
            : isLaptop
            ? "0.6rem"
            : isDesktop
            ? "0.7rem"
            : "0.5rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
      default:
        return {
          fontSize: isMobile
            ? "1rem"
            : isTablet
            ? "1.2rem"
            : isLaptop
            ? "1.5rem"
            : isDesktop
            ? "2rem"
            : "1rem",
          color,
          fontWeight,
          textAlign,
          lineHeight: 1.5,
        };
    }
  };

  return (
    <div style={{ ...getTypographyStyles(), width: "100%" }}>{children}</div>
  );
};

export default Typography;