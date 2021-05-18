import React from "react";
import propTypes from "prop-types";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player({ station }) {
  return (
    <div>
      <AudioPlayer
        className="player"
        src={station.urlResolved}
        showJumpControls={false}
        layout="stacked"
        customProgressBarSection={[]}
        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
}

Player.propTypes = {
  station: propTypes.object.isRequired,
};

export default Player;
