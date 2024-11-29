
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700'
    >
      {children}
    </button>
  );
};

export default Button;
