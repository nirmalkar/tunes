import React from "react";
import propTypes from "prop-types";
import Player from "components/Player";

const Channels = ({ station }) => {
  return (
    <div className="card shadow-sm">
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
