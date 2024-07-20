// src/components/ResponsiveFlexContainer.js

import React, { useState, useEffect } from "react";

interface ResponsiveFlexContainerProps {
  children: React.ReactNode;
  flexDirection: string;
  breakpoint?: number;
  style?: React.CSSProperties;
}

const ResponsiveFlexContainer = ({
  children,
  flexDirection,
  breakpoint = 949,
  style = {},
  ...props
}: {
  children: React.ReactNode;
  flexDirection: string;
  breakpoint?: number;
  style?: React.CSSProperties;
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: flexDirection ? flexDirection : windowWidth > breakpoint ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    margin: "2rem 7vw",
    ...style, // Merge the passed style prop with the default styles
  };

  return (
    <div style={containerStyle} {...props}>
      {children}
    </div>
  );
};

export default ResponsiveFlexContainer;
