import Axios from "axios";
import Nav from "../components/nav";

function IndexPage({ data }) {
  console.log(data);
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
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
