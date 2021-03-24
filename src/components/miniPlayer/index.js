import React from 'react';
import "./index.less";

const MiniPlayer = (props) => {
  const { imgUrl, musicName, playStatus, onPlayStatusChange, onPlayListView, className } = props || {};

  return <div className={`mini-player-container ${className || ""}`}>
    <img className="mini-player-img" src={imgUrl} alt="" />
    <div className="mini-player-name">{musicName}</div>
    <div className="mini-player-status" onClick={onPlayStatusChange}>
      <svg aria-hidden="true" className="mini-player-status-icon">
        <use xlinkHref={`#${playStatus === "play" ? "iconzanting" : "iconbofang"}`} />
      </svg>
    </div>
    <div className="mini-player-more" onClick={onPlayListView}>
      <svg aria-hidden="true" className="mini-player-more-icon">
        <use xlinkHref="#icongengduo" />
      </svg>
    </div>
  </div>
};

export default React.memo(MiniPlayer);