// Programmed in Collaboration by: Dennis Russell, Lean Hansen & Frederik Barbré

"use client";

import { useEffect, useState } from "react";
import { useStore } from "../../app/store";

// This component is used to display the rating for the game, where we make use of the svg to display the rating
export default function Rating({ rating, isBig, ratingCount }) {
  const theme = useStore((store) => store.theme);
  const [ratingPercentage, setRatingPercentage] = useState(0);
  const [color, setColor] = useState(null);
  const [text, setText] = useState(null);

  if (!rating) {
    rating = 0;
  }

  if (!ratingCount) {
    ratingCount = 0;
  }

  // setting the color and text for the rating
  useEffect(() => {
    if (rating >= 89) {
      setColor("url(#gradientMaster)");
      setText("Masterpiece");
    } else if (rating >= 74) {
      setColor("url(#gradientGood)");
      setText("Good");
    } else if (rating >= 59) {
      setColor("url(#gradientMid)");
      setText("Average");
    } else if (rating > 0) {
      setColor("url(#gradientBad)");
      setText("Bad");
    } else {
      setColor("url(#gradientNA)");
      setText("N/A");
    }
  }, []);

  // setting the rating percentage
  useEffect(() => {
    const percentage = (251.2 / 100) * rating;
    setTimeout(() => {
      setRatingPercentage(percentage);
    }, 1000);
  }, []);

  const formattedRating = Math.floor(rating) / 10;
  return (
    <div className={`flex flex-col items-center `}>
      <div className={`relative ${!isBig && "translate-y-[-2.5px]"}`}>
        <svg
          viewBox="0 0 110 110"
          style={{
            width: isBig ? "156px" : "118px",
            height: isBig ? "156px" : "118px",
          }}
        >
          <defs>
            <linearGradient
              id="gradientMaster"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7E43DF" />
              <stop offset="100%" stopColor="#00D1FF" />
            </linearGradient>
            <linearGradient id="gradientGood" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#44D36C" />
              <stop offset="100%" stopColor="#4DED7A" />
            </linearGradient>
            <linearGradient id="gradientMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D3CE44" />
              <stop offset="100%" stopColor="#EDE74E" />
            </linearGradient>
            <linearGradient id="gradientBad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D34C44" />
              <stop offset="100%" stopColor="#EC564E" />
            </linearGradient>
            <linearGradient id="gradientNA" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor={theme === "light" ? "#E1E1E1" : "#2C2C2C"}
              />
              <stop
                offset="100%"
                stopColor={theme === "light" ? "#E1E1E1" : "#2C2C2C"}
              />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeWidth="9"
            stroke={theme === "light" ? "#E1E1E1" : "#2C2C2C"}
            fill="none"
            strokeDasharray="251.2, 251.2"
            d="M55 15 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="9"
            fill="none"
            d="M55 15 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
            style={{
              strokeDasharray: `${ratingPercentage}px, 251.2px`,
              transition: "stroke-dasharray 3s ease 0s",
              stroke: color,
            }}
          ></path>
        </svg>
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center ${
            isBig && "translate-y-[-6px]"
          }`}
        >
          <p
            className={`${
              isBig
                ? "text-[36px] tracking-[2.2px] h-[46px]"
                : "text-[24px] tracking-[1.5px]"
            } font-bold`}
          >
            {rating === 0
              ? "N/A"
              : formattedRating.toString().length !== 1
              ? formattedRating
              : `${formattedRating}.0`}
          </p>
          {isBig && rating !== 0 && (
            <p className="opacity-50 uppercase font-semibold tracking-[0.6px] text-[10px]">
              {text}
            </p>
          )}
        </div>
      </div>
      <p className="opacity-50 uppercase font-semibold tracking-[0.72px] text-[12px]">
        {ratingCount} {isBig ? "Critics" : "Users"}
      </p>
    </div>
  );
}
