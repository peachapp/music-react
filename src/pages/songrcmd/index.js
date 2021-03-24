import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavBar, Icon } from 'zarm';
import { getDailySongs } from 'axios/api/songrcmd';
import MiniPlayer from 'components/miniPlayer';
import './index.less';

const Songrcmd = (props) => {
  const history = useHistory();
  // props

  // data
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const [dailySongs, setDailySongs] = useState([]);

  const dispatch = useDispatch();

  // onGetDailySongs
  const onGetDailySongs = async () => {
    try {
      const res = await getDailySongs();
      if (res.code === 200) {
        setDailySongs(res.data.dailySongs || []);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetDailySongs();
  }, []);

  // methods
  const onGoBack = () => {
    history.goBack();
  };

  const onPlay = (index) => {
    const list = dailySongs.map(dailySongItem => {
      return {
        id: dailySongItem.id,
        musicSrc: `https://music.163.com/song/media/outer/url?id=${dailySongItem.id}.mp3`,
        picUrl: dailySongItem.al.picUrl,
        musicName: dailySongItem.name,
        ar: dailySongItem.ar.map(arItem => arItem.name).join('、')
      }
    });
    dispatch({ type: 'UPDATE_currentSongList', value: list });
    dispatch({ type: 'UPDATE_currentSongIndex', value: index });
  };

  return <div className={`container songrcmd-container ${currentSongIndex !== null ? 'songrcmd-container-mini' : ''}`}>
    <div className="songrcmd-header">
      <NavBar
        className="songrcmd-navbar"
        left={<Icon type="arrow-left" onClick={onGoBack} />}
        right={
          <Icon type="question-round" onClick={() => window.alert('click icon')} />
        }
      />
    </div>
    <div className="songrcmd-control">
      <div className="songrcmd-bofang-all">
        <i className="iconfont iconbofang1" />
      </div>
      <div className="songrcmd-control-text">播放全部</div>
    </div>
    <div className="songrcmd-list">
      {
        dailySongs.map((dailySongItem, dailySongIndex) => {
          return <div className="songrcmd-item" key={dailySongItem.id}>
            <img className="songrcmd-img" src={dailySongItem.al.picUrl} alt="" />
            <div className="songrcmd-content">
              <div className="songrcmd-name">{dailySongItem.name}</div>
              <div className="songrcmd-other">
                {
                  dailySongItem.ar.map((arItem) => {
                    return <span key={arItem.id}>{arItem.name}</span>
                  })
                }
                <span> - </span>
                <span>{dailySongItem.al.name}</span>
              </div>
            </div>
            <div className="songrcmd-action" onClick={() => { onPlay(dailySongIndex) }}>
              <i className="iconfont iconbofang" />
            </div>
          </div>
        })
      }
    </div>
    {currentSongIndex !== null ? <MiniPlayer className="songrcmd-miniplayer" /> : ""}
  </div>
};

export default React.memo(Songrcmd);
