import React from "react";

export default function Border() {
  return <div style={styles.divider}></div>;
}

const styles = {
  divider: {
    background: "lightgrey",
    height: 1,
    width: "100%",
  },
};
