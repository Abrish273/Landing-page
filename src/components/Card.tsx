import React from "react";
import { UseFlexColumnBelowWidth } from "../utils";
import Typography from "./Typography";
import { COLORS } from "../constants/theme";
import { ArrowRight } from "../assets";

type StyleType = "default" | "style_one" | "style_two" | "style_three";

interface CardProps {
  type?: StyleType;
  imageSrc?: string;
  title?: string;
  description?: string;
  borderColor?: string;
  backgroundColor?: string;
  padding?: string;
  width: string | number;
  children: React.ReactNode;
  variantTitle?: string;
  variantBody?: string;
  colorProps?: string;
  icon: boolean;
}

const getCardStyles = (type?: StyleType) => {
  switch (type) {
    case "style_one":
      return {
        display: "flex",
        backgroundColor: COLORS.btnBglight,
        color: "black",
        // border: "1px solid black",
        flexDirection: "column",
        borderRadius: "10px",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "6px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "0.5vw 2vw",
        width: "12em",
      };
    case "style_two":
      return {
        display: "flex",
        // backgroundColor: "lightgray",
        color: "darkgray",
        // border: "1px solid darkgray",
        borderRadius: "2px",
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "10px",
        width: "15em",
      };
    case "style_three":
      return {
        display: "flex",
        backgroundColor: "lightblue",
        color: "blue",
        border: "1px solid blue",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "6px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "4vw",
        width: "15em",
      };
    default:
      return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "1rem",
      };
  }
};

const Card: React.FC<CardProps> = ({
  type = "default",
  imageSrc,
  title,
  description,
  borderColor,
  backgroundColor,
  padding,
  width,
  children,
  variantTitle,
  variantBody,
  colorProps,
  icon,
}) => {
  const styles = getCardStyles(type);

  if (type === "default") {
    return (
      <div
        style={{
          ...styles,
          borderColor,
          backgroundColor,
          padding,
          width: "100%",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div style={styles}>
      {imageSrc && (
        <img
          src={imageSrc}
          style={{ width: width ? width : "2em" }}
          alt="card-img"
        />
      )}
      <div>
        {title && (
          <p style={{ textAlign: "center" }}>
            <Typography variant={variantTitle ? variantTitle : "h4"}>
              {title}
            </Typography>
          </p>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          {description && (
            <p style={{ textAlign: "center" }}>
              <Typography
                variant={variantBody ? variantBody : "body3"}
                color={colorProps ? colorProps : COLORS.black}
              >
                {description}
              </Typography>
            </p>
          )}
          {icon && <img src={ArrowRight} style={{ width: "30px" }} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Card;
