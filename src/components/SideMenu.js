import React from "react";
import listStyleImage from "../images/arrow_right.png";
import Border from "./Border";

export default function ({ categories }) {
  categories = [
    { name: "Furniture" },
    { name: "Fashion Design" },
    { name: "Baking" },
    { name: "Make Over" },
    { name: "Photography" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
    { name: "Electricity" },
  ];

  const allcateg = () => {
    return categories.map((category, j) => (
      <li key={j} style={styles.li}>
        {category.name}
      </li>
    ));
  };
  return (
    <div style={styles.container}>
      <p style={styles.header}>All Categories</p>
      <Border />
      <ul style={styles.list}>{allcateg()}</ul>
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    boxShadow: "0px 3px 7px rgba(96, 96, 96, 0.34)",
    color: "#000000",
    padding: 10,
    width: "100%",
  },
  header: {
    fontWeight: "bolder",
  },
  list: {
    listStyleImage: `url(${listStyleImage})`,
  },
  li: {
    padding: "5px 0",
    cursor: "pointer",
  },
};
