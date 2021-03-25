import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./index.less";

const NormalPlayer = (props) => {
  const history = useHistory();
  const handleWidth = 12;
  // props

  // ref
  const audioRef = useSelector(state => state.audioRef);
  const sliderRef = useRef();
  const handleRef = useRef();
  const lineRef = useRef();

  // data
  const currentSongList = useSelector(state => state.currentSongList);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSongStatus = useSelector(state => state.currentSongStatus);
  const currentSongProgress = useSelector(state => state.currentSongProgress);
  const currentSong = currentSongList[currentSongIndex];
  const [touch, setTouch] = useState({});

  // 
  useEffect(() => {
    if (currentSongProgress >= 0 && currentSongProgress <= 100 && !touch.initiated) {
      const barWidth = sliderRef.current.clientWidth - handleWidth;
      const offsetWidth = (currentSongProgress * barWidth) / 100;
      lineRef.current.style.width = `${offsetWidth}px`;
      handleRef.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`;
    };
    // eslint-disable-next-line
  }, [currentSongProgress]);

  // methods
  const onGoBack = () => {
    history.goBack();
  };

  const onProgressChange = (value) => {
    const { duration } = audioRef.current;
    audioRef.current.currentTime = value * duration;
  };

  const onPlayStatusChange = (event) => {
    if (currentSongStatus === 'play') {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    };
  };

  const _offset = (offsetWidth) => {
    lineRef.current.style.width = `${offsetWidth}px`;
    handleRef.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`;
  };

  const _changePercent = () => {
    const barWidth = sliderRef.current.clientWidth - handleWidth;
    const curPercent = lineRef.current.clientWidth / barWidth;
    onProgressChange(curPercent);
  };

  const onSliderClick = (event) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetWidth = event.pageX - rect.left;
    _offset(offsetWidth);
    _changePercent();
  };

  const onHandleTouchStart = (event) => {
    const startTouch = {};
    startTouch.initiated = true;
    startTouch.startX = event.touches[0].pageX;
    startTouch.left = lineRef.current.clientWidth;
    setTouch(startTouch);
  };

  const onHandleTouchMove = (event) => {
    if (!touch.initiated) return;
    const deltaX = event.touches[0].pageX - touch.startX;
    const barWidth = sliderRef.current.clientWidth - handleWidth;
    const offsetWidth = Math.min(Math.max(0, touch.left + deltaX), barWidth);
    _offset(offsetWidth);
  };

  const onHandleTouchEnd = (event) => {
    const endTouch = JSON.parse(JSON.stringify(touch));
    endTouch.initiated = false;
    setTouch(endTouch);
    _changePercent();
  };

  return <div className="normal-player-container">
    <div className="normal-player-header">
      <div className="normal-player-header-left" onClick={onGoBack}>
        <i className="iconfont iconxia" />
      </div>
      <div className="normal-player-header-center">
        {currentSong.musicName}
      </div>
      <div className="normal-player-header-right">
        <i className="iconfont iconfenxiang1" />
      </div>
    </div>
    <div className="normal-player-control">
      <div className="normal-player-menus">
        <div className="normal-player-menu-item">
          <i className="iconfont iconxihuan normal-player-xihuan" />
        </div>
        <div className="normal-player-menu-item">
          <i className="iconfont iconxiazai normal-player-xiazai" />
        </div>
        <div className="normal-player-menu-item">
          <i className="iconfont icongequ normal-player-chang" />
        </div>
        <div className="normal-player-menu-item">
          <i className="iconfont iconpinglun normal-player-pinglun" />
        </div>
        <div className="normal-player-menu-item">
          <i className="iconfont icongengduo normal-player-gengduo" />
        </div>
      </div>
      <div className="normal-player-slider">
        <div className="slider" ref={sliderRef} onClick={onSliderClick}>
          <div className="slider-line" ref={lineRef}></div>
          <div className="slider-handle" ref={handleRef}
            onTouchStart={onHandleTouchStart}
            onTouchMove={onHandleTouchMove}
            onTouchEnd={onHandleTouchEnd}>
          </div>
        </div>
      </div>
      <div className="normal-player-operations">
        <div className="normal-player-operation-item">
          <i className="iconfont iconsuijibofang normal-player-suiji" />
        </div>
        <div className="normal-player-operation-item">
          <i className="iconfont iconshangyiqu normal-player-prev" />
        </div>
        <div className="normal-player-operation-item" onClick={onPlayStatusChange}>
          <i className={`iconfont  ${currentSongStatus === 'play' ? 'iconzanting normal-player-pause' : 'iconbofang normal-player-play'}`} />
        </div>
        <div className="normal-player-operation-item">
          <i className="iconfont iconxiayiqu normal-player-next" />
        </div>
        <div className="normal-player-operation-item">
          <i className="iconfont icongengduo1 normal-player-list" />
        </div>
      </div>
    </div>
  </div>
};

export default React.memo(NormalPlayer);