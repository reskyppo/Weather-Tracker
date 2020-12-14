import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Skeleton from "../components/Skeleton";
import WeatherCard from "../components/WeatherCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [cuaca, setCuaca] = useState();
  const [suhu, setSuhu] = useState();
  const [kodeCuaca, setKodeCuaca] = useState();
  const [selected, setSelected] = useState(501400);
  const [today, setToday] = useState(true);
  const date = new Date();
  const n = date.toLocaleTimeString("en-US", { hour12: false });
  const d = date.getDay();
  const day = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
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
      } else {
        setCuaca(data[3].cuaca);
        setSuhu(data[3].tempC);
        setKodeCuaca(data[3].kodeCuaca);
      }
    } catch (err) {
      console.log(err);
    }
  };
  handleTime();

  const handleToday = () => {
    setToday(!today);
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 h-screen">
      <section className="flex justify-center ">
        <select
          onClick={handleSelected}
          className="mx-auto overscroll-auto bg-transparent text-3xl w-screen md:w-min py-4  outline-none hover:bg-indigo-400 focus:outline-none  text-white"
        >
          {datas?.map?.((data, idx) => (
            <option key={idx} value={data.id}>
              {data.kota}
            </option>
          ))}
        </select>
      </section>
      <Hero
        cuaca={cuaca}
        suhu={suhu}
        kodeCuaca={kodeCuaca}
        day={day[d - 1]}
        time={n.slice(0, 5)}
      />
      <section className="bg-white flex justify-center mt-4 py-4">
        {today ? (
          <>
            <Navbar title="Hari Ini" clicked onClick={handleToday} />
            <Navbar title="Besok" onClick={handleToday} />
          </>
        ) : (
          <>
            <Navbar title="Hari Ini" onClick={handleToday} />
            <Navbar title="Besok" onClick={handleToday} clicked />
          </>
        )}
      </section>
      <section className="bg-white flex justify-center">
        {loading ? (
          <div className="flex flex-col md:flex-row  justify-center">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : today ? (
          <div className="flex flex-col md:flex-row justify-center">
            <WeatherCard
              jamCuaca={details[0]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[0]?.kodeCuaca}
              tempC={details[0]?.tempC}
              cuaca={details[0]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[1]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[1]?.kodeCuaca}
              tempC={details[1]?.tempC}
              cuaca={details[1]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[2]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[2]?.kodeCuaca}
              tempC={details[2]?.tempC}
              cuaca={details[2]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[3]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[3]?.kodeCuaca}
              tempC={details[3]?.tempC}
              cuaca={details[3]?.cuaca}
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row  justify-center">
            <WeatherCard
              jamCuaca={details[4]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[4]?.kodeCuaca}
              tempC={details[4]?.tempC}
              cuaca={details[4]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[5]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[5]?.kodeCuaca}
              tempC={details[5]?.tempC}
              cuaca={details[5]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[6]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[6]?.kodeCuaca}
              tempC={details[6]?.tempC}
              cuaca={details[6]?.cuaca}
            />
            <WeatherCard
              jamCuaca={details[7]?.jamCuaca?.slice(11, 16)}
              kodeCuaca={details[7]?.kodeCuaca}
              tempC={details[7]?.tempC}
              cuaca={details[7]?.cuaca}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
