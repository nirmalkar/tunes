import React from "react";
import propTypes from "prop-types";

import { useHistory } from "react-router-dom";
import ReactLottie from "components/ReactLottie";

function EntertainmentCard({ card }) {
  const { link, animationData, type } = card;

  const history = useHistory();

  const options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const goTo = (link) => {
    history.push(link);
  };

  return (
    <div className="col-md-4 col-lg-3 col-xxl-2">
      <h4 className="font-monospace text-secondary">{type}</h4>
      <div
        className="card mb-3 card cursor-pointer neu"
        style={{ maxWidth: "540px", maxHeight: "540px" }}
        onClick={() => goTo(link)}
      >
        <ReactLottie options={options} height={200} width={200} />
      </div>
    </div>
  );
}

EntertainmentCard.propTypes = {
  card: propTypes.object.isRequired,
};

export default EntertainmentCard;
