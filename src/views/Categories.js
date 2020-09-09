import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SideMenu from "../components/SideMenu";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <Search />
      </div>

      <div style={styles.sidemenuContainer}>
        <SideMenu />
      </div>

      <div>
        <p>Sort By: </p>
        <select name="option" id="option">
          <option value="1">Popularity</option>
          <option value="2">New</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "55px 0",
    background: "#000100",
  },
  sidemenuContainer: {
    display: "absolute",
    marginTop: "-2.5em",
    padding: "20px 20px",
    width: "20%",
  },
};

export default Categories;
