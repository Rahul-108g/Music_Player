import { useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => {
  const { sel_id } = useSelector((state) => state.app);

  return (
    <>
      {sel_id &&
        sel_id.map((val, ind) => (
          <div key={ind} className="pl1">
            <AudioPlayer
              onPlay={(e) => console.log(e)}
              autoPlay
              src={`assets/${val.audio}`}

              // other props here
            />
          </div>
        ))}
    </>
  );
};
export default Player;
