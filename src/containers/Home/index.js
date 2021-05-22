import React from "react";

import { entertainmentCards } from "constants/EntertainmentCards";
import Layout from "components/Layout";
import EntertainmentCard from "components/EntertainmentCard";

function Home() {
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

export default Home;
