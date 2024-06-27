import React, { useState } from "react";
import { COLORS } from "../../constants/theme";

interface CustomBtnProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  type: "type_one" | "type_two" | "type_three"; // Define the types here
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  onClick,
  disabled = false,
  label,
  type,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  // Define styles for each type
  const getTypeStyles = () => {
    switch (type) {
      case "type_one":
        return {
          backgroundColor: isHovered ? COLORS.white : COLORS.primary,
          color: isHovered ? COLORS.primary : COLORS.white,
          border: isHovered ? `1px solid ${COLORS.primary}` : "none",
        };
      case "type_two":
        return {
          backgroundColor: isHovered ? COLORS.white : COLORS.primary,
          color: COLORS.white,
          border: "none",
          fontWeight: "bold",
        };
      case "type_three":
        return {
          backgroundColor: isHovered ? "#27ae60" : COLORS.primary,
          color: COLORS.white,
          // border: isHovered ? `1px solid #27ae60` : "none",
          borderRadius: 20,
        };
      default:
        return {
          backgroundColor: COLORS.primary,
          color: COLORS.white,
          border: "none",
        };
    }
  };

  return (
    <button
      style={{
        padding: "0.5rem 1.5rem",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        cursor: "pointer",
        ...getTypeStyles(), // Apply styles based on type
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {label}
    </button>
  );
};

export default CustomBtn;
