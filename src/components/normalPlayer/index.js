import React, { useState, useRef } from 'react';
import "./index.less";

const NormalPlayer = (props) => {

  // ref
  const playPauseRef = useRef();
  const progressRef = useRef();
  const minProgressRef = useRef();
  const ballRef = useRef();


  return <div className="normal-player-container">
    <div className="normal-player-control">
      <p className="normal-player-btn play" ref={playPauseRef}></p>
      <div className="normal-player-progress" ref={progressRef}>
        <div className="normal-player-min-progress" ref={minProgressRef}></div>
        <div className="normal-player-ball" ref={ballRef}></div>
      </div>
    </div>
  </div>
};

export default NormalPlayer;