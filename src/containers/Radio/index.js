import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";

import Layout from "components/Layout";
import Channels from "components/Channels";

function Radio() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getRadioStations();
  }, []);

  async function getRadioStations() {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");
    await api
      .searchStations({
        language: "english",
        tag: "jazz",
        limit: 10,
      })
      .then((res) => setStations(res));
  }
  console.log(stations);

  const listRadioStations = () => {
    return (
      <div className="container">
        <div className="row g-3">
          {stations.map((station, i) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3" key={station.id}>
                <Channels station={station} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div>Radio</div>
      <div className="container h-25"></div>
      {listRadioStations()}
    </Layout>
  );
}

export default Radio;
