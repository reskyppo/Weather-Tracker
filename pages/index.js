import Axios from "axios";
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
  const [clicked, setClicked] = useState(true);
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

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
    <div className="flex flex-col justify-center items-center py-16 md:py-52">
      <Select onClick={(e) => setId(e.target.value)} data={data} />
      <Hero kodeCuaca={kodeCuaca} cuaca={cuaca} suhu={suhu} />
      <div className="flex">
        <Nav title="Hari Ini" onClick={() => setToday(true)} />
        <Nav title="Besok" onClick={() => setToday(true)} />
      </div>
      <Card today={today} loading={loading} datas={datas} />
    </div>
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
