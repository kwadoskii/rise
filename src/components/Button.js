import React from "react";

const Button = ({ classes, type = "button", name }) => {
  return (
    <button className={`xbtn search-btn ${classes}`} type={type}>
      {name}
    </button>
  );
};

export default Button;
