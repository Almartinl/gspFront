import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "999",
      }}
    >
      {isVisible && (
        <IconButton
          color="primary"
          size="large"
          aria-label="up"
          component="label"
          onClick={scrollToTop}
          sx={{ bgcolor: "#c2e0ff", ":hover": { bgcolor: "#99c1ff" } }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </div>
  );
}

export default ScrollToTopButton;
