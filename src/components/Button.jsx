

import React from "react";

const Button = ({className, onClick, disabled, type, icon}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
    >
     {icon}
    </button>
  );
};

export default Button;
