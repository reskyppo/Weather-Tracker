import Axios from "axios";
import { useEffect, useState } from "react";
import Ping from "../components/Ping";

function IndexPage({ data }) {
  const [id, setId] = useState(() => 501397);
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(true);
  const [cuaca, setCuaca] = useState();
  const [suhu, setSuhu] = useState();
  const [kodeCuaca, setKodeCuaca] = useState();
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
  const handleId = (e) => setId(e.target.value);

  return (
    <div className="flex flex-col justify-center items-center  py-52">
      <select
        onClick={handleId}
        className="form-select bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 
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
            <img
              src={`https://ibnux.github.io/BMKG-importer/icon/${kodeCuaca}.png`}
              alt={`Gambar icon cuaca yang sedang ${cuaca}`}
            />
            <p>{cuaca}</p>
          </section>
          <section className="px-16">
            <p className="text-7xl">
              {suhu}
              <sup>o</sup>
            </p>
          </section>
        </div>
      </div>
      <div className="py-4 flex w-64  justify-center">
        <p
          className="w-1/2 pt-4 mx-2 border-b cursor-pointer"
          onClick={() => setToday(true)}
        >
          Hari Ini
        </p>
        <p
          className="w-1/2 pt-4 mx-2 border-b cursor-pointer"
          onClick={() => setToday(false)}
        >
          Besok
        </p>
      </div>
      <div className="py-4 flex w-1/2 justify-evenly">
        {loading ? (
          <div className="mx-4 flex">
            <Ping />
            <Ping />
            <Ping />
            <Ping />
          </div>
        ) : (
          <div>
            {today ? (
              <div className="flex">
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[0].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[0].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[0].tempC}
                    <sup>o</sup> / {datas[0].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[0].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[1].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[1].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[1].tempC}
                    <sup>o</sup> / {datas[1].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[1].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[2].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[2].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[2].tempC}
                    <sup>o</sup> / {datas[2].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[2].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[3].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[3].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[3].tempC}
                    <sup>o</sup> / {datas[3].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[3].cuaca}</p>
                </section>
              </div>
            ) : (
              <div className="flex">
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[4].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[4].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[4].tempC}
                    <sup>o</sup> / {datas[4].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[4].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[5].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[5].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[5].tempC}
                    <sup>o</sup> / {datas[5].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[5].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[6].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[6].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[6].tempC}
                    <sup>o</sup> / {datas[6].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[6].cuaca}</p>
                </section>
                <section className="mx-6 py-4 px-1">
                  <p className="text-center">
                    {datas[7].jamCuaca.slice(11, 16)}
                  </p>
                  <img
                    src={`https://ibnux.github.io/BMKG-importer/icon/${datas[7].kodeCuaca}.png`}
                    alt={`Ini adalah icon gambar cuaca ${cuaca}`}
                    className="w-28 my-4"
                  />
                  <p className="text-center">
                    {datas[7].tempC}
                    <sup>o</sup> / {datas[7].tempF}
                    <sup>o</sup>
                  </p>
                  <p className="text-center">{datas[7].cuaca}</p>
                </section>
              </div>
            )}
          </div>
        )}
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
