import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

/**
 * RadialProgress component displays a circular progress indicator with dynamic animation.
 * It shows the progress percentage and updates continuously until reaching the specified fill percentage.
 * @param {object} props - The props object.
 * @param {string} props.strokeWidth - The width of the progress circle's stroke.
 * @param {number} props.fill - The fill percentage of the progress circle.
 * @returns {JSX.Element} JSX representation of the RadialProgress component.
 */
const RadialProgress = ({ strokeWidth = 1, fill }) => {
  /**
   * State to hold the current progress percentage.
   * @type {[number, function]} Tuple containing the progress value and a function to update it.
   */
  const [progress, setProgress] = useState(0);

  /**
   * useEffect hook to update progress state at regular intervals for animation.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < fill) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval); // Stop the interval when progress reaches fill
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fill, progress]);

  /**
   * Function to calculate the stroke dash offset based on progress percentage.
   * @param {number} currentProgress - Current progress percentage.
   * @returns {number} Calculated stroke dash offset value.
   */
  const updateProgress = (currentProgress) => {
    const circumference = 251.2; // Circumference of the circle with radius 40
    const offset = circumference - (currentProgress / 100) * circumference;
    return offset;
  };

  return (
    <div className="relative h-auto w-auto" data-testid="radial-progress-component">
      <svg className="h-full w-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          data-testid="progress-circle-bg"
          className="stroke-current text-gray-200"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          data-testid="progress-circle"
          id="progress-circle"
          className="progress-ring__circle stroke-current text-indigo-500"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={updateProgress(progress)}
        />
        {/* Center text */}
        <text x="50" y="50" className="text-xl" textAnchor="middle" alignmentBaseline="middle">
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
};

RadialProgress.propTypes = {
  strokeWidth: PropTypes.string,
  fill: PropTypes.number.isRequired,
};

export default RadialProgress;
