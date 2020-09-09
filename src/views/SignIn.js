import React from "react";
import logo from "../images/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignIn() {
  return (
    <div style={styles.main}>
      <nav style={styles.nav}>
        <a className="navbar-brand" href="index.html">
          <img
            src={logo}
            width="24px"
            height="26.7px"
            className="d-inline-block align-top"
            alt="logo"
          />
          <span style={{ color: "#fff", fontWeight: "bolder" }}>Rise</span>
        </a>
      </nav>

      <form style={styles.container}>
        <h5>Sign In</h5>
        <Input label="Email Address" placeholder="johndoe@example.com" type="email" />
        <Input label="Choose a Password" placeholder="*************" type="password" />
        <p style={styles.forgot}>Forgot Password?</p>
        <Button name="sign in" classes="m-3" type="submit" />

        <p style={styles.new}>
          New User? <span style={styles.signup}>Sign In</span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    alignItems: "center",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "301px",
    padding: 40,
    width: "40%",
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#F90178",
    margin: 4,
  },
  main: {
    alignItems: "center",
    background: "rgba(40, 40, 40, 0.9)",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 30,
    minHeight: "100vh",
  },
  nav: {
    color: "#fff",
    display: "block",
    left: "18px",
    position: "absolute",
    top: "18px",
  },
  new: {
    alignSelf: "flex-start",
  },
  signup: {
    color: "#F90178",
    cursor: "pointer",
  },
};
