import React from 'react';
import './Button.css';
const Button = ({ label, classname, handleClick }) => {
  return (
    <button className={classname} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
