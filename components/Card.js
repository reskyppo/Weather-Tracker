import React from "react";
import CardDetails from "../components/CardDetails";
import Ping from "../components/Ping";

const Card = ({ today, loading, datas, bgCard }) => {
  return (
    <div className="py-4 flex w-screen">
      {loading ? (
        <div className="mx-4 flex justify-center items-center w-screen">
          <Ping />
          <Ping />
          <Ping />
          <Ping />
        </div>
      ) : (
        <div>
          {today ? (
            <div className="flex w-screen">
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[0].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[0].kodeCuaca}
                  tempC={datas[0].tempC}
                  tempF={datas[0].tempF}
                  cuaca={datas[0].cuaca}
                />
              </section>
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[1].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[1].kodeCuaca}
                  tempC={datas[1].tempC}
                  tempF={datas[1].tempF}
                  cuaca={datas[1].cuaca}
                />
              </section>
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[2].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[2].kodeCuaca}
                  tempC={datas[2].tempC}
                  tempF={datas[2].tempF}
                  cuaca={datas[2].cuaca}
                />
              </section>
              <section className={["w-1/4 mx-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[3].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[3].kodeCuaca}
                  tempC={datas[3].tempC}
                  tempF={datas[3].tempF}
                  cuaca={datas[3].cuaca}
                />
              </section>
            </div>
          ) : (
            <div className="flex w-screen ">
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[4].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[4].kodeCuaca}
                  tempC={datas[4].tempC}
                  tempF={datas[4].tempF}
                  cuaca={datas[4].cuaca}
                />
              </section>
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[5].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[5].kodeCuaca}
                  tempC={datas[5].tempC}
                  tempF={datas[5].tempF}
                  cuaca={datas[5].cuaca}
                />
              </section>
              <section className={["w-1/4 ml-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[6].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[6].kodeCuaca}
                  tempC={datas[6].tempC}
                  tempF={datas[6].tempF}
                  cuaca={datas[6].cuaca}
                />
              </section>
              <section className={["w-1/4 mx-3 rounded-2xl", bgCard].join(" ")}>
                <CardDetails
                  jamCuaca={datas[7].jamCuaca.slice(11, 16)}
                  kodeCuaca={datas[7].kodeCuaca}
                  tempC={datas[7].tempC}
                  tempF={datas[7].tempF}
                  cuaca={datas[7].cuaca}
                />
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
