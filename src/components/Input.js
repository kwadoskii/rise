import React from "react";

const Input = ({ type = "text", placeholder, label }) => {
  return (
    <div className="input input-text">
      <p style={styles.text}>{label}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

const styles = {
  text: {
    color: "#000000",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "25px",
    marginBottom: 4,
  },
};

export default Input;
