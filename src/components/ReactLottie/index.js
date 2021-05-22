import React from "react";
import Lottie from "react-lottie";
import propTypes from "prop-types";

const ReactLottie = ({ options, height, width }) => {
  return <Lottie options={options} height={height} width={width} />;
};

ReactLottie.propTypes = {
  options: propTypes.object.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired,
};
export default ReactLottie;
