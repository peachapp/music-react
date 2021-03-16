import React, { useRef } from 'react';
import { Slider } from 'zarm';
import "./index.less";

const NormalPlayer = (props) => {
  // props
  const { progress, onProgressChange } = props || {};

  // data



  return <div className="normal-player-container">
    <div className="normal-player-header">
      <div className="normal-player-header-left">
        <i className="iconfont iconxia" />
      </div>
      <div className="normal-player-header-center">
        Dancing With Your Ghost
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
        <Slider value={progress} onChange={onProgressChange} />
      </div>
      <div className="normal-player-operations">
        <div className="normal-player-operation-item">
          <i className="iconfont iconsuijibofang normal-player-suiji" />
        </div>
        <div className="normal-player-operation-item">
          <i className="iconfont iconshangyiqu normal-player-prev" />
        </div>
        <div className="normal-player-operation-item">
          <i className="iconfont iconbofang normal-player-play" />
        </div>
        {/* <div className="normal-player-operation-item">
          <i className="iconfont iconzanting normal-player-pause" />
        </div> */}
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