import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', children, className }) => {
  return (
    <button type={type} onClick={onClick} className={`button`}>
      {children}
    </button>
  );
};

export default Button;