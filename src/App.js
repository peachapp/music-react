import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Routers from 'routers';
import './App.less';

const App = () => {
  // ref
  const audioRef = useRef();

  // data
  const currentSong = useSelector(state => state.currentSong);

  const dispatch = useDispatch();

  // 
  useEffect(() => {
    dispatch({ type: 'UPDATE_audioRef', value: audioRef })
  }, [dispatch, audioRef])

  // methods
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
    autoPlay
    className="audio"
    ref={audioRef}
    onTimeUpdate={onTimeUpdate}
    onEnded={onEnded}
    onError={onError}
  >
    <source src={(currentSong || {}).src} />
    您的浏览器不支持 audio 元素。
  </audio>]
};

export default App;
