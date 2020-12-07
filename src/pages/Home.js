import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

import WeatherDetails from "../components/WeatherDetails";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Wave from "../components/Wave";

const Home = () => {
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(true);

  useEffect(() => {
    Axios.get("https://ibnux.github.io/BMKG-importer/cuaca/501192.json")
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  const handleToday = () => {
    setToday(!today);
  };
  console.log(today);
  return (
    <div>
      <div
        style={{
          marginTop: "70px",
        }}
      >
        <Hero />
      </div>
      <div>
        <Wave />

        {today ? (
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
              onClick={handleToday}
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
        ) : (
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-70px",
              display: "flex",
            }}
          >
            <h1
              onClick={handleToday}
              style={{
                fontSize: "15px",
                color: "grey",
                paddingTop: "20px",
                marginLeft: "50px",
                paddingBottom: "20px",
              }}
            >
              Hari ini
            </h1>
            <h1
              style={{
                fontSize: "15px",
                color: "black",
                paddingTop: "20px",
                marginLeft: "50px",
                borderBottom: "solid 2px grey",
              }}
            >
              Besok
            </h1>
          </div>
        )}
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : today ? (
          <div style={{ display: "flex", backgroundColor: "white" }}>
            <WeatherDetails
              jamCuaca={datas[0].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[0].kodeCuaca}
              tempC={datas[0].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[1].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[1].kodeCuaca}
              tempC={datas[1].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[2].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[2].kodeCuaca}
              tempC={datas[2].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[3].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[3].kodeCuaca}
              tempC={datas[3].tempC}
            />
          </div>
        ) : (
          <div style={{ display: "flex", backgroundColor: "white" }}>
            <WeatherDetails
              jamCuaca={datas[4].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[4].kodeCuaca}
              tempC={datas[4].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[5].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[5].kodeCuaca}
              tempC={datas[5].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[6].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[6].kodeCuaca}
              tempC={datas[6].tempC}
            />
            <WeatherDetails
              jamCuaca={datas[7].jamCuaca.slice(11, 16)}
              kodeCuaca={datas[7].kodeCuaca}
              tempC={datas[7].tempC}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
