import React, { useState } from "react";
import { COLORS } from "../constants/theme";

{
  /*
  <CustomBtn
    icon={Plus}
    iconTwo={Right}
    loading={false}
    disabled={true}
    onClick={handleClick}
    label="Submit"
    type="type_one"
    size="normal"
    active={true}
  />  
*/
}

interface CustomBtnProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  type?: "type_one" | "type_two" | "type_three"; // Define the types here
  loading?: boolean;
  icon?: string;
  iconTwo?: string;
  size: string;
  active: boolean;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  onClick,
  disabled = false,
  label,
  type,
  loading,
  icon,
  iconTwo,
  size,
  active,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(active);
  const [isFocused, setIsFocused] = useState(false);

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Define styles for each type
  const getTypeStyles = () => {
    switch (type) {
      case "type_one":
        return {
          backgroundColor: disabled
            ? COLORS.btnBglight
            : isHovered
            ? COLORS.primaryHover
            : active
            ? COLORS.primary
            : COLORS.primary,
          color: disabled
            ? COLORS.btnGray
            : isHovered
            ? COLORS.white
            : COLORS.white,
          border: isHovered
            ? `1px solid ${COLORS.primary}`
            : isFocused
            ? `0.1em solid ${COLORS.black}`
            : "none",
        };
      case "type_two":
        return {
          backgroundColor: disabled
            ? COLORS.btnBglight
            : isHovered
            ? COLORS.primaryHover
            : active
            ? "red"
            : COLORS.btnBglight,
          color: disabled
            ? COLORS.btnGray
            : isHovered
            ? COLORS.white
            : COLORS.primary,
          border: isHovered
            ? `2px solid ${COLORS.primary}`
            : isFocused
            ? `0.1em solid ${COLORS.black}`
            : `2px solid ${COLORS.primary}`,
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
        padding:
          size === "small"
            ? "0.25rem 0.25rem"
            : size === "medium"
            ? "0.5rem 1rem"
            : "1rem 1rem",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        cursor: disabled ? "not-allowed" : loading ? "progress" : "pointer",
        fontSize: "0.8rem",
        ...getTypeStyles(),
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {icon && (
        <img
          src={icon}
          style={{
            width: "24px",
            height: "24px",
            background: "transparent",
            fill: COLORS.white,
          }}
          alt="icon"
        />
      )}

      {label}
      {!loading && iconTwo && (
        <img
          src={iconTwo}
          style={{
            width: "24px",
            height: "24px",
            background: "transparent",
            fill: COLORS.white,
          }}
          alt="iconTwo"
        />
      )}
      {loading && (
        <span className="ml-1 loading loading-spinner loading-sm"></span>
      )}
    </button>
  );
};

export default CustomBtn;
