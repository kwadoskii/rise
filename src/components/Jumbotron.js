import React from "react";
import Button from "./Button";

const Jumbotron = () => {
  return (
    <div className="xjumbotron">
      <div className="xjumbotron-text-holder">
        <h2>Advertise Your Business Online Free</h2>
        <p>
          Consectetur elit culpa culpa tempor esse Lorem excepteur. Dolore qui ut et culpa
          eu sint elit ut et consectetur officia.
        </p>
      </div>

      <div className="xjumbotron-btns">
        <Button name="REGISTER" type="button" classes="xbtn reg-btn" />
        <Button name="LOG IN" type="button" classes="xbtn login-btn" />
      </div>
    </div>
  );
};

export default Jumbotron;
