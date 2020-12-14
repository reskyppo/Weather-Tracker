import React from "react";

const WeatherCard = ({ jamCuaca, kodeCuaca, cuaca, tempC, }) => {
  return (
    <div className="w-1/4 font-semibold flex flex-col justify-center items-center text-2xl px-4 py-2">
      <p>{jamCuaca}</p>
      <img
        src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
        alt="icon Cuaca"
      />
      <p className="py-4">{cuaca}</p>
      <p>
        {tempC}
        <sup>o</sup>
      </p>
    </div>
  );
};

export default WeatherCard;
