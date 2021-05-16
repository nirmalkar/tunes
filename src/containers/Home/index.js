import React from "react";

import { entertainmentCards } from "constants/EntertainmentCards";
import Layout from "components/Layout";
import EntertainmentCard from "components/EntertainmentCard";

function Home() {
  return (
    <div>
      <Layout>
        <div className="h-100 container-fluid bg-light text-dark">
          <div className="container h-25"></div>
          <div className="container w-75 d-flex">
            {entertainmentCards.map((card) => (
              <EntertainmentCard key={card.type} card={card} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
