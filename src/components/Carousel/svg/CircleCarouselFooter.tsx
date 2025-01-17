import React from 'react';

interface CircleProps {
  size?: number;
  color?: string; 
  setCurrentImgIndex?: (index: number) => void;
}

const Circle: React.FC<CircleProps> = ({ size = 20, color = '#007bff', setCurrentImgIndex}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setCurrentImgIndex && setCurrentImgIndex(0)}
    >
      <circle cx="50" cy="50" r="45" fill={color} />

        <text
          x="50"
          y="55"
          fontSize="30"
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="Arial, sans-serif"
        />
     
    </svg>
  );
};

export default Circle;
