import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [cuaca, setCuaca] = useState();
  const [suhu, setSuhu] = useState();
  const [kodeCuaca, setKodeCuaca] = useState();
  const [selected, setSelected] = useState(501400);
  const date = new Date();
  const n = date.toLocaleTimeString("en-US", { hour12: false });
  const d = date.getDay();
  const day = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
  console.log(day[d - 1]);
  useEffect(() => {
    Axios.get("https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json")
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get(`https://ibnux.github.io/BMKG-importer/cuaca/${selected}.json`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading, selected]);

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleTime = async () => {
    try {
      let data = await details;
      if (
        data[0].jamCuaca.slice(11, 13) <= n.slice(0, 2) &&
        n.slice(0, 2) < data[1].jamCuaca.slice(11, 13)
      ) {
        setCuaca(data[0].cuaca);
        setSuhu(data[0].tempC);
        setKodeCuaca(data[0].kodeCuaca);
      }
      if (
        data[1].jamCuaca.slice(11, 13) <= n.slice(0, 2) &&
        n.slice(0, 2) < data[2].jamCuaca.slice(11, 13)
      ) {
        setCuaca(data[1].cuaca);
        setSuhu(data[1].tempC);
        setKodeCuaca(data[1].kodeCuaca);
      }
      if (
        data[2].jamCuaca.slice(11, 13) <= n.slice(0, 2) &&
        n.slice(0, 2) < data[3].jamCuaca.slice(11, 13)
      ) {
        setCuaca(data[2].cuaca);
        setSuhu(data[2].tempC);
        setKodeCuaca(data[2].kodeCuaca);
      }
      if (
        data[3].jamCuaca.slice(11, 13) <= n.slice(0, 2) &&
        n.slice(0, 2) < data[4].jamCuaca.slice(11, 13)
      ) {
        setCuaca(data[3].cuaca);
        setSuhu(data[3].tempC);
        setKodeCuaca(data[3].kodeCuaca);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleTime();

  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 h-screen  ">
      <section className="flex justify-center ">
        <select
          onClick={handleSelected}
          className="mx-auto overscroll-auto bg-transparent text-4xl py-4 px-2 outline-none hover:bg-indigo-400 focus:outline-none  text-white"
        >
          {datas?.map?.((data, idx) => (
            <option key={idx} value={data.id}>
              {data.kota}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-white text-4xl">{cuaca}</h1>
        <h1 className="text-white text-6xl py-3">
          {suhu} <sup>o</sup>
        </h1>
        <img
          src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
          alt="icon cuaca"
        />
        <h1 className="text-white text-4xl">
          {day[d - 1]}, {n.slice(0, 5)}
        </h1>
      </section>

      <section className="bg-white flex justify-center mt-4 py-4">
        <div className="text-3xl font-semibold m-2 py-2 border-gray-900 border-b-2">
          Hari Ini
        </div>
        <div className="text-3xl font-semibold m-2 py-2 border-gray-400 border-b-2">
          Besok
        </div>
      </section>
      <section className="bg-white flex justify-center">
        {loading ? (
          <div className="flex justify-center">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-1/4 font-semibold flex flex-col justify-center items-center text-2xl px-4 py-2">
              <p>{details[0]?.jamCuaca?.slice(11, 16)}</p>
              <img
                src={`https://ibnux.github.io/BMKG-importer/icon/${details[0]?.kodeCuaca}.png`}
                alt="icon Cuaca"
              />
              <p className="py-4">{details[0]?.cuaca}</p>
              <p>
                {details[0]?.tempC}
                <sup>o</sup>
              </p>
            </div>
            <div className="w-1/4 font-semibold flex flex-col justify-center items-center text-2xl px-4 py-2">
              <p>{details[1]?.jamCuaca?.slice(11, 16)}</p>
              <img
                src={`https://ibnux.github.io/BMKG-importer/icon/${details[1]?.kodeCuaca}.png`}
                alt="icon Cuaca"
              />
              <p className="py-4">{details[1]?.cuaca}</p>
              <p>
                {details[1]?.tempC}
                <sup>o</sup>
              </p>
            </div>
            <div className="w-1/4 font-semibold flex flex-col justify-center items-center text-2xl px-4 py-2">
              <p>{details[2]?.jamCuaca?.slice(11, 16)}</p>
              <img
                src={`https://ibnux.github.io/BMKG-importer/icon/${details[2]?.kodeCuaca}.png`}
                alt="icon Cuaca"
              />
              <p className="py-4">{details[2]?.cuaca}</p>
              <p>
                {details[2]?.tempC}
                <sup>o</sup>
              </p>
            </div>
            <div className="w-1/4 font-semibold flex flex-col justify-center items-center text-2xl px-4 py-2">
              <p>{details[3]?.jamCuaca?.slice(11, 16)}</p>
              <img
                src={`https://ibnux.github.io/BMKG-importer/icon/${details[3]?.kodeCuaca}.png`}
                alt="icon Cuaca"
              />
              <p className="py-4">{details[3]?.cuaca}</p>
              <p>
                {details[3]?.tempC} <sup>o</sup>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
