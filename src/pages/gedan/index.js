import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar, Icon } from 'zarm';
import { getPlayList } from 'axios/api/gedan';
import { bigNumberTransform } from 'common/utils';
import GedanIntroduction from 'components/gedanIntroduction';
import "./index.less";

const Gedan = () => {
  const history = useHistory();
  const { id } = history.location.params || {};

  // data
  const [playDetail, setPlayDetail] = useState({});
  const [introductionVisible, setIntroductionVisible] = useState(false);

  // onGetPlayList
  const onGetPlayList = async () => {
    try {
      const res = await getPlayList({ id });
      if (res.code === 200) {
        setPlayDetail(res.playlist);
      };
      console.log('res', res)
    } catch (error) {
      console.log(error);
    };
  };

  // 
  useEffect(() => {
    onGetPlayList();
  }, []);

  // methods
  const onGoBack = () => {
    history.goBack();
  };

  console.log('id', id);
  return <div className="gedan-container">
    <div className="gedan-header">
      <NavBar
        className="gedan-navbar"
        left={<Icon type="arrow-left" onClick={onGoBack} />}
        title="歌单"
        right={
          <Icon type="question-round" onClick={() => window.alert('click icon')} />
        }
      />
      <div className="gedan-detail">
        <div className="gedan-cover" onClick={() => { setIntroductionVisible(true) }}>
          <img className="gedan-cover-img" src={playDetail.coverImgUrl} alt="" />
          <div className="gedan-playcount">{bigNumberTransform(playDetail.playCount)}</div>
        </div>
        <div className="gedan-other">
          <div className="gedan-name">{playDetail.name}</div>
          <div className="gedan-creator">
            <img className="gedan-creator-img" src={(playDetail.creator || {}).avatarUrl} alt="" />
            <div className="gedan-creator-name">{(playDetail.creator || {}).nickname}</div>
          </div>
          <div className="gedan-description" onClick={() => { setIntroductionVisible(true) }}>
            <div className="gedan-description-text">{playDetail.description}</div>
            <Icon className="gedan-icon" type="arrow-right" />
          </div>
        </div>
      </div>
      <div className="gedan-action">
        <div className="gedan-action-item">订阅{playDetail.subscribedCount}</div>
        <div className="gedan-action-item">评论{playDetail.commentCount}</div>
        <div className="gedan-action-item">分享{playDetail.shareCount}</div>
      </div>
    </div>
    歌单列表
    {
      introductionVisible ?
        <GedanIntroduction
          coverImgUrl={playDetail.coverImgUrl}
          name={playDetail.name}
          tags={playDetail.tags}
          description={playDetail.description}
          onHide={() => { setIntroductionVisible(false) }} />
        : ''
    }
  </div>
};

export default React.memo(Gedan);
