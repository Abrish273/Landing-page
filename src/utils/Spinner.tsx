import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  speed?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#3498db",
  speed = 0.5,
}) => {
  const spinnerStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    border: "4px solid #ccc",
    borderTopColor: color,
    borderRadius: "50%",
    animation: `spin ${speed}s linear infinite`,
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div style={spinnerStyle}></div>
    </>
  );
};

export default Spinner;
