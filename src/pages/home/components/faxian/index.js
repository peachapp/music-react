import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel, Button, Icon } from 'zarm';
import { getBanner, getPersonalized } from 'axios/api/home';
import { bigNumberTransform } from 'common/utils';
import './index.less';

const Faxian = (props) => {
  const history = useHistory();
  // props

  // data
  const [banners, setBanners] = useState([]);
  const [personalizeds, setPersonalizeds] = useState([]);

  // onGetBanner
  const onGetBanner = async () => {
    try {
      const res = await getBanner({ type: 2 });
      if (res.code === 200) {
        setBanners(res.banners);
      };
    } catch (error) {
      console.log(error);
    }
  };

  // onGetPersonalized
  const onGetPersonalized = async () => {
    try {
      const res = await getPersonalized({ limit: 7 });
      if (res.code === 200) {
        setPersonalizeds(res.result);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetBanner();
    onGetPersonalized();
  }, []);

  // methods
  const onBannerClick = (url) => {
    if (!url) {
      return false;
    };
    window.location.href = url;
  };

  const onPersonalizedClick = (id) => {
    history.push({
      pathname: "/gedan",
      params: {
        id
      }
    });
  };

  return <div className="faxian-container">
    {/* 顶部 */}
    <div className="faxian-header">
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
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">每日推荐</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">私人FM</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">歌单</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">排行榜</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">直播</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">数字专辑</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">歌房</span>
      </div>
      <div className="menu-item">
        <img className="menu-img" src="https://static.zhongan.com/website/health/zarm/images/banners/1.png" alt="" />
        <span className="menu-text">游戏专区</span>
      </div>
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
  </div>
};

export default React.memo(Faxian);
