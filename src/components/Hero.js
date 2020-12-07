import React from "react";

const Hero = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "35px",
          }}
        >
          DKI Jakarta
        </h2>
        <i
          className="arrow down"
          style={{ marginTop: "7px", marginLeft: "10px" }}
        ></i>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "-25px",
          fontSize: "20px",
        }}
      >
        Kota Jakarta Barat
      </p>

      <h2
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "5px",
          fontSize: "80px",
        }}
      >
        27 <sup style={{ marginLeft: "-20px" }}>o</sup>
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "15px",
          marginTop: "-55px",
        }}
      >
        Jum'at, 31 Juli 09:00
      </p>
      <p
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "-10px",
          fontSize: "25px",
        }}
      >
        Cerah Berawan
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-20px",
        }}
      >
        <img
          src="https://ibnux.github.io/BMKG-importer/icon/1.png"
          alt="Icon cuaca"
        />
      </div>
    </>
  );
};

export default Hero;
