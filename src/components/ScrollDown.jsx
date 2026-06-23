// ScrollDown.jsx
import React from "react";

export default function ScrollDown({ href = "#skills", className = "" }) {
  return (
    <a
      href={href}
      aria-label="Scroll to next section"
      className={`${className}`}
      >
    {/* // group absolute left-1/2 transform -translate-x-1/2 bottom-8  */}
      <span className="sr-only">Scroll down</span>

      {/* Circle + Arrow */}
      {/* <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center">
        <svg
          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div> */}

      {/* Bouncing small chevron for emphasis */}
      <div className="mt-10 flex justify-center">
        <svg
          className="w-5 h-5 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        
      </div>
    </a>
  );
}
