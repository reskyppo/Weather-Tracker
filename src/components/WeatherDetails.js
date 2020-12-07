import React from "react";

const WeatherDetails = ({ jamCuaca, kodeCuaca, tempC }) => {
  return (
    <div style={{ width: "25%", paddingBottom: "25px" }}>
      <p style={{ marginLeft: "50px" }}>{jamCuaca}</p>
      <img
        style={{ width: "50px", marginLeft: "50px", marginTop: "5px" }}
        src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
        alt="icon Cuaca"
      />
      <p style={{ marginLeft: "60px" }}>
        {tempC} <sup>o</sup>
      </p>
    </div>
  );
};

export default WeatherDetails;
