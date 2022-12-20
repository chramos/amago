import React from "react";

type ButtonProps = {
  onClick?: () => void;
};
const Button = ({
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center px-6 transition-all duration-200 py-3 border border-transparent text-sm uppercase font-medium font-museo rounded-full shadow-lg text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
    >
      {children}
    </button>
  );
};

export default Button;
