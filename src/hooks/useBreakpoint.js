import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoints, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 600) {
      setBreakPoint(0);
    }
    if (600 < windowSize.width && windowSize.width <= 900) {
      setBreakPoint(600);
    }
    if (900 < windowSize.width && windowSize.width < 960) {
      setBreakPoint(960);
    }
    if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(960);
    }
    if (1280 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(1280);
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(1920);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width, breakpoints]);
  return {
    isMobile: breakpoints <= 600,
    isDesktop: breakpoints > 600,
  };
};

export default useBreakpoint;
