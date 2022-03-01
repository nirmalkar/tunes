import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import propTypes from "prop-types";

import { entertainmentCards } from "constants/EntertainmentCards";
import useAuth from "hooks/useAuth";
import Layout from "components/Layout";
import EntertainmentCard from "components/EntertainmentCard";
import axios from "axios";

const { REACT_APP_CLIENT_ID } = process.env;

const code = new URLSearchParams(window.location.search).get("code");

const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_CLIENT_ID,
});

function Home() {
  console.log(code);
  const accessToken = useAuth(code);
  if (!code) {
    window.location = "/auth";
  }

  useEffect(() => {
    if (!accessToken) return;
    console.log(accessToken);
    spotifyApi.setAccessToken(accessToken);
    localStorage.setItem("token", accessToken);
    axios
      .get("https://api.spotify.com/v1/me/shows", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <Layout>
      <div className="h-100 container-fluid bg-light text-dark">
        <h1 className="container-fluid pt-5 my-md-0 h-md-25 font-monospace text-center">
          tunes
        </h1>
        <p className="font-monospace text-center pb-5 text-muted">
          the voice you love
        </p>
        <div className="container">
          <div className="row d-flex justify-content-center h-100">
            {entertainmentCards.map((card) => (
              <EntertainmentCard key={card.type} card={card} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
  code: propTypes.string.isRequired,
};

export default Home;
