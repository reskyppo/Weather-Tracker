import React from "react";

const Hero = ({ kodeCuaca, cuaca, suhu }) => {
  return (
    <div className="text-center">
      <div className="flex flex-col md:flex-row md:ml-28 ">
        <section>
          <img
            src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
            alt={`Gambar icon cuaca yang sedang ${cuaca}`}
            className="w-56 my-"
          />
          <p className="text-2xl mt-4 md:-mt-8">{cuaca ? cuaca : "Cerah"}</p>
        </section>
        <section className="md:px-16">
          <p className="text-8xl">
            {suhu}
            <sup>o</sup>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
