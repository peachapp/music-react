import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import NormalPlayer from 'components/normalPlayer';
import "./index.less";

const Player = (props) => {
  // props

  // data
  const currentSongList = useSelector(state => state.currentSongList);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSong = currentSongList[currentSongIndex];

  // methods


  return <div className="player-container">
    <NormalPlayer {...props} />
    <div className="player-bg" style={{ 'backgroundImage': `url(${currentSong.picUrl})` }}></div>
    <div className="player-mask"></div>
  </div >
};

export default React.memo(Player);