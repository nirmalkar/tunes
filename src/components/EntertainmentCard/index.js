import React from "react";
import propTypes from "prop-types";

import { useHistory } from "react-router-dom";

function EntertainmentCard({ card }) {
  const { type, description, image, link } = card;

  const history = useHistory();

  const goTo = (link) => {
    history.push(link);
  };

  return (
    <div
      className="card shadow-sm w-50 mx-4 cursor-pointer"
      onClick={() => goTo(link)}
    >
      <img
        src={image}
        className="card-img-top"
        style={{ height: "50%" }}
        alt={type}
      ></img>
      <div className="card-body rounded">
        <h5 className="card-title my-2">{type}</h5>
        <p className="card-text fw-light font-monospace pt-2 text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

EntertainmentCard.propTypes = {
  card: propTypes.object.isRequired,
};

export default EntertainmentCard;
