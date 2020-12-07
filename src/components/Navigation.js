import React from "react";

const Navigation = (today) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "-70px",
        display: "flex",
      }}
    >
      <h1
        style={{
          fontSize: "15px",
          color: "black",
          paddingTop: "20px",
          marginLeft: "50px",
          paddingBottom: "20px",
          borderBottom: "solid 2px grey",
        }}
      >
        Hari ini
      </h1>
      <h1
        style={{
          fontSize: "15px",
          color: "grey",
          paddingTop: "20px",
          marginLeft: "50px",
        }}
      >
        Besok
      </h1>
    </div>
  );
};

export default Navigation;
