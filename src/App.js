import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Routers from 'routers';
import './App.less';

const App = () => {
  // ref
  const audioRef = useRef();

  // data
  const currentSongList = useSelector(state => state.currentSongList);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSong = currentSongList[currentSongIndex];

  const dispatch = useDispatch();

  // 
  useEffect(() => {
    dispatch({ type: 'UPDATE_audioRef', value: audioRef })
  }, [dispatch, audioRef])

  // methods
  const onLoadedData = () => {
    audioRef.current.play();
  };

  const onPlay = () => {
    dispatch({ type: 'UPDATE_currentSongStatus', value: 'play' });
  };

  const onPause = () => {
    dispatch({ type: 'UPDATE_currentSongStatus', value: 'pause' });
  };

  const onTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    const progress = currentTime / duration;
    dispatch({ type: 'UPDATE_homeActiveSubroute', value: progress * 100 });
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

  return [<Routers key="router" />,
  <audio
    key="audio"
    className="audio"
    ref={audioRef}
    src={(currentSong || {}).musicSrc}
    onLoadedData={onLoadedData}
    onPlay={onPlay}
    onPause={onPause}
    onTimeUpdate={onTimeUpdate}
    onEnded={onEnded}
    onError={onError}
  >
    <source src={(currentSong || {}).musicSrc} />
    您的浏览器不支持 audio 元素。
  </audio>]
};

export default App;
