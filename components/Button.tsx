import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold smooth-transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg tracking-wide active:scale-95 transform";

  const variants = {
    primary: "bg-gradient-to-br from-arctic-600 to-arctic-700 text-white hover:from-arctic-700 hover:to-arctic-800 hover:shadow-xl focus:ring-arctic-600",
    secondary: "bg-arctic-100 text-arctic-900 hover:bg-arctic-200 hover:shadow-md focus:ring-arctic-500",
    outline: "border-2 border-moon-300 bg-transparent hover:bg-moon-50 hover:border-moon-400 text-moon-700 focus:ring-moon-500"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};