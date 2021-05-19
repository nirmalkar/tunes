import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";

import Layout from "components/Layout";
import Channels from "components/Channels";

function Radio() {
  const [stations, setStations] = useState([]);
  const [genre, setGenre] = useState("all");

  const filters = [
    "all",
    "rap",
    "dance",
    "rock",
    "pop",
    "jazz",
    "house",
    "disco",
    "country",
    "classical",
    "retro",
  ];
  useEffect(() => {
    getRadioStations();
  }, [genre]);

  async function getRadioStations() {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");
    await api
      .searchStations({
        language: "english",
        tag: genre,
        limit: 20,
      })
      .then((res) => setStations(res));
  }

  const listRadioStations = () => {
    return (
      <div className="container pb-4">
        {filters.map((filter) => {
          return (
            <button
              className="btn shadow-sm font-monospace genre-btn m-2"
              style={{ background: genre === filter ? "#f3f3f3" : "" }}
              key="filter"
              onClick={() => setGenre(filter)}
            >
              {filter}
            </button>
          );
        })}
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

  const getLoader = () => {
    if (!stations.length)
      return (
        <div className="get-centered">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
  };

  return (
    <Layout>
      {getLoader()}
      <h1 className="d-flex container p-5 font-monospace text-muted justify-content-center align-self-center">
        tunes
      </h1>
      {listRadioStations()}
    </Layout>
  );
}

export default Radio;
