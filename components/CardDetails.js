import React from "react";

const CardDetails = ({ jamCuaca, cuaca, kodeCuaca, tempC, tempF }) => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center  md:mx-6 py-4 px-1">
        <p className="text-center">{jamCuaca}</p>
        <img
          src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
          alt={`Ini adalah icon gambar cuaca ${cuaca}`}
          className="h-12 my-4"
        />
        <p className="text-center text-sm">
          {tempC}
          <sup>o</sup> / {tempF}
          <sup>o</sup>
        </p>
        <p className="text-center">{cuaca}</p>
      </section>
    </div>
  );
};

export default CardDetails;
