import React from "react";
import propTypes from "prop-types";
import Player from "components/Player";

const Channels = ({ station }) => {
  return (
    <div className="card shadow-sm">
      <h6
        className="card-title font-monospace text-muted p-3 text-center text-truncate"
        title={station.name}
      >
        {station.name}
      </h6>
      <div className="card-body">
        <Player station={station} />
      </div>
    </div>
  );
};

Channels.propTypes = {
  station: propTypes.object.isRequired,
};

export default Channels;
