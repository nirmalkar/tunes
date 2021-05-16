import React from "react";
import propTypes from "prop-types";

function EntertainmentCard({ card }) {
  const { type, description, image } = card;
  return (
    <div className="card shadow-sm w-50 mx-4 cursor-pointer">
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
