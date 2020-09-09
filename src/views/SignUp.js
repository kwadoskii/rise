import React from "react";
import logo from "../images/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
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
        <h5>Sign Up</h5>
        <Input label="Full Name" placeholder="Ogunlade Oluwasayo" />
        <Input label="Phone Number" placeholder="+234842135453" />
        <Input label="Email" placeholder="johndoe@example.com" />
        <Input label="Choose a Password" type="password" placeholder="*************" />
        <Button name="sign up" classes="mt-3" type="submit" />

        <p style={styles.text}>
          Already a user? <span style={styles.signin}> Sign In</span>
        </p>
      </form>
    </div>
  );
};

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
    position: "relative",
    display: "block",
    width: "100%",
    top: "0px",
    color: "#fff",
  },
  signin: {
    color: "#F90178",
    cursor: "pointer",
  },
  text: {
    alignSelf: "flex-start",
    margin: "15px 0",
  },
};

export default SignUp;
