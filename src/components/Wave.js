import React from "react";
import Wave1 from "../assets/img/wave1.svg";
import Wave2 from "../assets/img/wave2.svg";
import Wave3 from "../assets/img/wave3.svg";

const Wave = () => {
  return (
    <div>
      <img src={Wave1} style={{ marginTop: "30px" }} alt="Wave1" />
      <img src={Wave2} style={{ marginTop: "-180px" }} alt="Wave2" />
      <img src={Wave3} style={{ marginTop: "-190px" }} alt="Wave3" />
    </div>
  );
};

export default Wave;
