import React from "react";

export const ScrollArrow = ({ targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="scroll-arrow"
    >
      <svg
        width="29"
        height="36"
        viewBox="0 0 29 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3"
          stroke="#FF4575"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
