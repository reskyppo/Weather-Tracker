import React from "react";

const Hero = ({ cuaca, suhu, kodeCuaca, day, time }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-white text-4xl">{cuaca}</h1>
      <h1 className="text-white text-6xl py-3">
        {suhu} <sup>o</sup>
      </h1>
      <img
        src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
        alt="icon cuaca"
      />
      <h1 className="text-white text-4xl">
        {day}, {time}
      </h1>
    </div>
  );
};

export default Hero;
