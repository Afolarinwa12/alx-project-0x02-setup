import React from 'react';
import { ButtonProps } from '@/interfaces'; // Import the ButtonProps interface

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium', // Default size
  shape = 'rounded-md', // Default shape
  onClick,
  className = '', // Default empty string for className
}) => {
  // Determine size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  }[size];

  // Determine shape classes (directly use the prop as it's a Tailwind class)
  const shapeClasses = shape;

  // Combine base, size, shape, and any additional custom classes
  const combinedClasses = `
    bg-blue-600 text-white font-semibold
    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
    transition-colors duration-200
    ${sizeClasses}
    ${shapeClasses}
    ${className}
  `;

  return (
    <button
      onClick={onClick}
      className={combinedClasses.trim()} // .trim() removes leading/trailing whitespace
    >
      {children}
    </button>
  );
};

export default Button;