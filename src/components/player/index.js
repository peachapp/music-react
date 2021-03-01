import React, { useState, useRef } from 'react';
import MiniPlayer from 'components/miniPlayer/index';
import "./index.less";

const Player = (props) => {
  // props
  const { src, imgUrl, musicName, playStatus, onPlayStatusChange, onPlayListView } = props || {};

  // data
  const [currentTime, setCurrentTime] = useState(0);

  // ref
  const audioRef = useRef();



  // methods
  const updateTime = e => {
    setCurrentTime(e.target.currentTime);
  };

  const handleEnd = () => {
    // if (mode === playMode.loop) {
    //   handleLoop();
    // } else {
    //   handleNext();
    // }
  };

  const handleError = () => {
    // songReady.current = true;
    // handleNext();
    // alert("播放出错");
  };


  return <div className="audio-container">
    <audio
      className="audio"
      // autoPlay={running}
      // loop={playMode.value === 'loop' || playlist.length === 1}
      src={src}
      ref={audioRef}
      onTimeUpdate={updateTime}
      onEnded={handleEnd}
      onError={handleError}
    // onTimeUpdate={this.onTimeUpdate}
    // onEnded={this.next}
    // onError={this.onError}
    // ref={(audio) => { this.audio = audio }}
    />
    <MiniPlayer {...props} />
  </div >
};

export default Player;