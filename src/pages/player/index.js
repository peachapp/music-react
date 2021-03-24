import React, { useState, useRef } from 'react';
import MiniPlayer from 'components/miniPlayer';
import NormalPlayer from 'components/normalPlayer';
import "./index.less";

const Player = (props) => {
  // props
  const { src, imgUrl, musicName, playStatus, onPlayStatusChange, onPlayListView } = props || {};

  // data

  // methods


  return <div className="player-container">
    {/* <MiniPlayer {...props} /> */}
    <NormalPlayer {...props} />
  </div >
};

export default React.memo(Player);