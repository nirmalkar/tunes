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
        limit: 20,
      })
      .then((res) => setStations(res));
  }

  const listRadioStations = () => {
    return (
      <div className="container pb-4">
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
      <h1 className="d-flex container p-5  font-monospace text-muted justify-content-center align-self-center">
        tunes
      </h1>
      {listRadioStations()}
    </Layout>
  );
}

export default Radio;
