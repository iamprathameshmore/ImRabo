import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  onClick,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full justify-center border-2 border-zinc-300 text-black hover:text-white bg-zinc-200  px-3 py-1.5 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
