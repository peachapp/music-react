import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Slider } from 'zarm';
import "./index.less";

const NormalPlayer = (props) => {
  const history = useHistory();
  // props

  // ref
  const audioRef = useSelector(state => state.audioRef);

  // data
  const currentSongList = useSelector(state => state.currentSongList);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSongStatus = useSelector(state => state.currentSongStatus);
  const currentSongProgress = useSelector(state => state.currentSongProgress);
  const currentSong = currentSongList[currentSongIndex];

  // methods
  const onGoBack = () => {
    history.goBack();
  };

  const onProgressChange = (value) => {
    const { duration } = audioRef.current;
    audioRef.current.currentTime = value * duration / 100;
  };

  const onPlayStatusChange = (event) => {
    if (currentSongStatus === 'play') {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    };
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
        <Slider value={currentSongProgress} onChange={onProgressChange} />
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