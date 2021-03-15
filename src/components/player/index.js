import React, { useState, useRef } from 'react';
import MiniPlayer from 'components/miniPlayer/index';
import NormalPlayer from 'components/normalPlayer/index';
import "./index.less";

const Player = (props) => {
  // props
  const { src, imgUrl, musicName, playStatus, onPlayStatusChange, onPlayListView } = props || {};

  // data
  const [progress, setProgress] = useState(0);

  // ref
  const audioRef = useRef();



  // methods
  const onTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    const progress = currentTime / duration;
    setProgress(progress * 100);
  };

  const onEnded = () => {
    console.log('onEnded', audioRef)
    // if (mode === playMode.loop) {
    //   handleLoop();
    // } else {
    //   handleNext();
    // }
  };

  const onError = () => {
    console.log('onError', audioRef)
    // songReady.current = true;
    // handleNext();
    // alert("播放出错");
  };

  const onProgressChange = (value) => {
    const { duration } = audioRef.current;
    audioRef.current.currentTime = value * duration / 100;
  }


  return <div className="audio-container">
    <audio
      autoPlay
      className="audio"
      ref={audioRef}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      onError={onError}
    >
      <source src={src} />
      您的浏览器不支持 audio 元素。
    </audio>
    {/* <MiniPlayer {...props} /> */}
    <NormalPlayer {...props} progress={progress} onProgressChange={onProgressChange} />
  </div >
};

export default React.memo(Player);