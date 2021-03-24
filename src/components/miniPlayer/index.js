import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Progress } from 'zarm';
import "./index.less";

const MiniPlayer = (props) => {
  const history = useHistory();
  // props
  const { className } = props || {};

  // ref
  const audioRef = useSelector(state => state.audioRef);

  // data
  const currentSongList = useSelector(state => state.currentSongList);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSongStatus = useSelector(state => state.currentSongStatus);
  const currentSongProgress = useSelector(state => state.currentSongProgress);
  const currentSong = currentSongList[currentSongIndex];

  const dispatch = useDispatch();

  // methods
  const onPlayStatusChange = (event) => {
    event.stopPropagation();
    event.cancelBubble = true;
    if (currentSongStatus === 'play') {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    };
  };

  const onPlayListView = (event) => {
    event.stopPropagation();
    event.cancelBubble = true;
    console.log('onPlayListView');
  };

  const onToPlayer = () => {
    history.push("/player");
  };

  return <div className={`mini-player-container ${className || ""}`} onClick={onToPlayer}>
    <img className="mini-player-img" src={currentSong.picUrl} alt="" />
    <div className="mini-player-name">{currentSong.musicName}-{currentSong.ar}</div>
    <div className="mini-player-status" onClick={onPlayStatusChange}>
      <Progress
        size="30px"
        shape="circle"
        strokeShape="round"
        strokeWidth={1}
        percent={currentSongProgress}
        text={(percent) => (
          <svg aria-hidden="true" className="mini-player-status-icon">
            <use xlinkHref={`#${currentSongStatus === "play" ? "iconzanting" : "iconbofang"}`} />
          </svg>
        )}
      />
      {/* <svg aria-hidden="true" className="mini-player-status-icon">
        <use xlinkHref={`#${currentSongStatus === "play" ? "iconzanting" : "iconbofang"}`} />
      </svg> */}
    </div>
    <div className="mini-player-more" onClick={onPlayListView}>
      <svg aria-hidden="true" className="mini-player-more-icon">
        <use xlinkHref="#icongengduo" />
      </svg>
    </div>
  </div>
};

export default React.memo(MiniPlayer);