import React, { useRef, useEffect, useState } from "react";
import "./scrollToTop.css";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="ScrollToTopButton"
      onClick={handleScrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      🚀
    </button>
  );
};

export default ScrollToTopButton;
