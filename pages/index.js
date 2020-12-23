import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardDetails from "../components/CardDetails";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Ping from "../components/Ping";
import Select from "../components/Select";

function IndexPage({ data }) {
  const [id, setId] = useState(() => 501397);
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(true);
  const [cuaca, setCuaca] = useState();
  const [suhu, setSuhu] = useState();
  const [kodeCuaca, setKodeCuaca] = useState();
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  let bgColor, bgCard;

  switch (cuaca) {
    case "Cerah Berawan":
      bgColor = "bg-yellow-300";
      bgCard = "bg-yellow-400";
      break;
    case "Cerah":
      bgColor = "bg-yellow-300";
      bgCard = "bg-yellow-400";
      break;
    case "Berawan":
      bgColor = "bg-gray-400";
      bgCard = "bg-gray-500";
      break;
    case "Berkabut":
      bgColor = "bg-gray-400";
      bgCard = "bg-gray-500";
      break;
    case "Hujan Sedang":
      bgColor = "bg-indigo-400";
      bgCard = "bg-indigo-500";
      break;
    case "Hujan Ringan":
      bgColor = "bg-indigo-400";
      bgCard = "bg-indigo-500";
      break;
    case "Hujan Petir":
      bgColor = "bg-indigo-400";
      bgCard = "bg-indigo-500";
      break;
  }

  useEffect(() => {
    Axios.get(`https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`)
      .then((res) => {
        setDatas(res.data);
        if (
          res.data[0].jamCuaca.slice(11, 13) <= time.slice(0, 2) &&
          time.slice(0, 2) < res.data[1].jamCuaca.slice(11, 13)
        ) {
          setCuaca(res.data[0].cuaca);
          setSuhu(res.data[0].tempC);
          setKodeCuaca(res.data[0].kodeCuaca);
        }
        if (
          res.data[1].jamCuaca.slice(11, 13) <= time.slice(0, 2) &&
          time.slice(0, 2) < res.data[2].jamCuaca.slice(11, 13)
        ) {
          setCuaca(res.data[1].cuaca);
          setSuhu(res.data[1].tempC);
          setKodeCuaca(res.data[1].kodeCuaca);
        }
        if (
          res.data[2].jamCuaca.slice(11, 13) <= time.slice(0, 2) &&
          time.slice(0, 2) < res.data[3].jamCuaca.slice(11, 13)
        ) {
          setCuaca(res.data[2].cuaca);
          setSuhu(res.data[2].tempC);
          setKodeCuaca(res.data[2].kodeCuaca);
        } else {
          setCuaca(res.data[3].cuaca);
          setSuhu(res.data[3].tempC);
          setKodeCuaca(res.data[3].kodeCuaca);
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => setLoading(false), 2500);
  }, [id]);

  return (
    <>
      <Head>
        <title>Perkiraan Cuaca</title>
        <meta property="og:title" content="Perkiraan Cuaca" key="title" />
      </Head>

      <main
        className={[
          "flex flex-col text-black justify-center items-center pt-16 min-h-screen md:py-52",
          bgColor,
        ].join(" ")}
      >
        <Select
          onClick={(e) => setId(e.target.value)}
          data={data}
          bgColor={bgColor}
        />
        <Hero kodeCuaca={kodeCuaca} cuaca={cuaca} suhu={suhu} />
        <div className="flex">
          {today ? (
            <>
              <Nav title="Hari Ini" onClick={() => setToday(true)} clicked />
              <Nav title="Besok" onClick={() => setToday(false)} />
            </>
          ) : (
            <>
              <Nav title="Hari Ini" onClick={() => setToday(true)} />
              <Nav title="Besok" onClick={() => setToday(false)} clicked />
            </>
          )}
        </div>
        <Card today={today} loading={loading} datas={datas} bgCard={bgCard} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await Axios.get(
    "https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json"
  );
  const data = await res.data;
  return {
    props: { data },
  };
}

export default IndexPage;
