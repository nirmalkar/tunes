import React from "react";

import { entertainmentCards } from "constants/EntertainmentCards";
import Layout from "components/Layout";
import EntertainmentCard from "components/EntertainmentCard";

function Home() {
  return (
    <div>
      <Layout>
        <div className="h-100 container-fluid bg-light text-dark">
          <div className="container-fluid h-25"></div>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {entertainmentCards.map((card) => (
                <EntertainmentCard key={card.type} card={card} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
