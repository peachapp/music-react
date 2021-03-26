import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Carousel, Button, Icon } from 'zarm';
import { getBanner, getFindBall, getPersonalized } from 'axios/api/home';
import { bigNumberTransform } from 'common/utils';
import Container from 'components/container';
import './index.less';

const Faxian = (props) => {
  const history = useHistory();
  // props

  // data
  const [banners, setBanners] = useState([]);
  const [findBalls, setFindBalls] = useState([]);
  const [personalizeds, setPersonalizeds] = useState([]);
  const [playlistTags, setPlaylistTags] = useState([]);
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);

  const dispatch = useDispatch();

  // onGetBanner
  const onGetBanner = async () => {
    try {
      const res = await getBanner({ type: 2 });
      if (res.code === 200) {
        setBanners(res.banners || []);
      };
      return res.code;
    } catch (error) {
      console.log(error);
    }
  };

  // onGetFindBall
  const onGetFindBall = async () => {
    try {
      const res = await getFindBall();
      if (res.code === 200) {
        setFindBalls(res.data || []);
      };
      return res.code;
    } catch (error) {
      console.log(error);
    }
  };

  // onGetPersonalized
  const onGetPersonalized = async () => {
    try {
      const res = await getPersonalized({ limit: 7 });
      if (res.code === 200) {
        setPersonalizeds(res.result || []);
      };
      return res.code;
    } catch (error) {
      console.log(error);
    }
  };

  // onInitData
  const onInitData = async () => {
    return [
      await onGetBanner(),
      await onGetFindBall(),
      await onGetPersonalized()
    ];
  };

  useEffect(() => {
    onInitData();
  }, []);

  // methods
  const onBannerClick = (url) => {
    if (!url) {
      return false;
    };
    window.location.href = url;
  };

  const onFindBallClick = (item) => {
    switch (item.id) {
      case -1:
        history.push("/songrcmd");
        break;
      default:
        history.push("/songrcmd");
    }
    // window.location.href = item.url;
  };

  const onPersonalizedClick = (id) => {
    history.push({
      pathname: "/gedan",
      params: {
        id
      }
    });
  };

  return <div className="container faxian-container">
    {/* 顶部 */}
    <div className="header-container faxian-header">
      <div className="faxian-header-left">
        <i className="iconfont icongengduo1 faxian-header-left-icon" />
      </div>
      <div className="faxian-header-center">
        <i className="iconfont iconsousuo faxian-header-center-icon" />大家都在搜 进击的巨人
      </div>
      <div className="faxian-header-right">
        <i className="iconfont iconaudio-fill faxian-header-right-icon" />
      </div>
    </div>
    <Container onRefresh={onInitData}>
      {/* 轮播图 */}
      <Carousel className="banner-container" loop>
        {
          banners.map((bannerItem, bannerIndex) => {
            return (
              <div className="banner-item" key={bannerIndex} onClick={() => { onBannerClick(bannerItem.url) }}>
                <img className="banner-img" src={bannerItem.pic} alt="" draggable={false} />
              </div>
            );
          })
        }
      </Carousel>
      {/* 菜单 */}
      <div className="menu-container">
        {
          findBalls.map((findBallItem) => {
            return <div className="menu-item" key={findBallItem.id} onClick={() => { onFindBallClick(findBallItem.url) }}>
              <img className="menu-img" src={findBallItem.iconUrl} alt="" />
              <span className="menu-text">{findBallItem.name}</span>
            </div>
          })
        }
      </div>
      {/* 推荐歌单 */}
      <div className="tuijiangedan-container">
        <div className="title">
          <div className="title-text">推荐歌单</div>
          <Button size="xs" shape="round">
            更多
          <Icon className="title-icon" type="arrow-right" />
          </Button>
        </div>
        <div className="tuijiangedan">
          {
            personalizeds.map((personalizedItem) => {
              return <div className="tuijiangedan-item" key={personalizedItem.id} onClick={() => { onPersonalizedClick(personalizedItem.id) }}>
                <div className="tuijiangedan-playcount">{bigNumberTransform(personalizedItem.playCount)}</div>
                <img className="tuijiangedan-img" src={personalizedItem.picUrl} alt="" draggable={false} />
                <div className="tuijiangedan-name">{personalizedItem.name}</div>
              </div>
            })
          }
        </div>
      </div>
      {/* 精品歌单/私人定制 */}
      <div className="tuijiangedan-container">
        <div className="title">
          <div className="title-text">
            私人定制-
          {(playlistTags[activePlaylistIndex] || {}).name}
            <i className="iconfont iconshuaxin" style={{ 'marginLeft': '5px' }} />
          </div>
          <Button size="xs" shape="round">
            <i className="iconfont iconbofang1 title-icon" />
          播放
        </Button>
        </div>
        <div className="tuijiangedan">
          {
            personalizeds.map((personalizedItem) => {
              return <div className="tuijiangedan-item" key={personalizedItem.id} onClick={() => { onPersonalizedClick(personalizedItem.id) }}>
                <div className="tuijiangedan-playcount">{bigNumberTransform(personalizedItem.playCount)}</div>
                <img className="tuijiangedan-img" src={personalizedItem.picUrl} alt="" draggable={false} />
                <div className="tuijiangedan-name">{personalizedItem.name}</div>
              </div>
            })
          }
        </div>
      </div>
      {/* 精选音乐视频 */}
      <div className="tuijiangedan-container">
        <div className="title">
          <div className="title-text">精选音乐视频</div>
          <Button size="xs" shape="round">
            更多
          <Icon className="title-icon" type="arrow-right" />
          </Button>
        </div>
        <div className="tuijiangedan">
          {
            personalizeds.map((personalizedItem) => {
              return <div className="tuijiangedan-item" key={personalizedItem.id} onClick={() => { onPersonalizedClick(personalizedItem.id) }}>
                <div className="tuijiangedan-playcount">{bigNumberTransform(personalizedItem.playCount)}</div>
                <img className="tuijiangedan-img" src={personalizedItem.picUrl} alt="" draggable={false} />
                <div className="tuijiangedan-name">{personalizedItem.name}</div>
              </div>
            })
          }
        </div>
      </div>
      {/* 桃桃康的雷达歌单 */}
      <div className="tuijiangedan-container">
        <div className="title">
          <div className="title-text">桃桃康的雷达歌单</div>
          <Button size="xs" shape="round">
            更多
          <Icon className="title-icon" type="arrow-right" />
          </Button>
        </div>
        <div className="tuijiangedan">
          {
            personalizeds.map((personalizedItem) => {
              return <div className="tuijiangedan-item" key={personalizedItem.id} onClick={() => { onPersonalizedClick(personalizedItem.id) }}>
                <div className="tuijiangedan-playcount">{bigNumberTransform(personalizedItem.playCount)}</div>
                <img className="tuijiangedan-img" src={personalizedItem.picUrl} alt="" draggable={false} />
                <div className="tuijiangedan-name">{personalizedItem.name}</div>
              </div>
            })
          }
        </div>
      </div>
    </Container>
  </div>
};

export default React.memo(Faxian);
