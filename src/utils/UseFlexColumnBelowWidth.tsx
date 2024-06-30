import { useState, useEffect } from "react";

const UseFlexColumnBelowWidth = (maxWidth: number): boolean => {
  const [isBelowWidth, setIsBelowWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowWidth(window.innerWidth < maxWidth);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isBelowWidth;
};

export default UseFlexColumnBelowWidth;
