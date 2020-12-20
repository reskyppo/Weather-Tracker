import Axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

function IndexPage({ data }) {
  const [id, setId] = useState(501397);
  const [datas, setDatas] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const date = new Date().getDay();
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
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [id]);
  console.log(id);
  const handleId = (e) => setId(e.target.value);
  return (
    <div>
      <div className="py-20">
        <div className="text-center">
          {loading ? (
            <div className="text-9xl ">Loading...</div>
          ) : (
            <div className="">
              <h1 className="text-9xl">
                {datas[0].tempC}
                <sup>o</sup> C
              </h1>
              <p>{hari[date]}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <select
            onClick={handleId}
            className="bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {data.map((dat) => (
              <option key={dat.id} value={dat.id}>
                {dat.kecamatan}
              </option>
            ))}
          </select>
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
