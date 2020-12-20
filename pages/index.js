import Axios from "axios";
import { useEffect, useState } from "react";
import Ping from "../components/Ping";

function IndexPage({ data }) {
  const [id, setId] = useState(() => 501397);
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [cuaca, setCuaca] = useState();
  const [suhu, setSuhu] = useState();
  const [kodeCuaca, setKodeCuaca] = useState();
  const date = new Date().getDay();
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  useEffect(() => {
    Axios.get(`https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`)
      .then((res) => {
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
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [id]);
  const handleId = (e) => setId(e.target.value);
  return (
    <div className="flex flex-col justify-center items-center  py-20">
      <select
        onClick={handleId}
        className="form-select w-1/4  bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 
            hover:text-gray-900 dark:hover:text-gray-50 text-3xl "
      >
        {data.map((dat) => (
          <option key={dat.id} value={dat.id}>
            {`${dat.kota}, ${dat.kecamatan}`}
          </option>
        ))}
      </select>
      <div className="text-center">
        <div className="flex ml-28 ">
          <section>
            <div className="text-9xl font-semibold">
              <div className="">
                {suhu} <sup>o</sup> C
              </div>
            </div>
          </section>
          <section className="px-16">
            <p className="text-left text-xl">{time}</p>
            <p className="text-left text-2xl font-semibold py-4">
              {hari[date]}
            </p>
            <div className="text-left text-xl">{cuaca}</div>
          </section>
        </div>
      </div>
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
