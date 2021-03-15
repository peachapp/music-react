import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'zarm';
import { getBanner } from 'axios/api/home';
import './index.less';

const Faxian = (props) => {
  const history = useHistory();
  // props

  // data
  const [banners, setBanners] = useState([]);

  // onGetBanner
  const onGetBanner = async () => {
    try {
      const res = await getBanner();
      if (res.code === 200) {
        setBanners(res.banners);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetBanner()
  }, []);

  // methods
  const onBannerClick = (url) => {
    if (!url) {
      return false;
    };
    window.location.href = url;
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
    <Carousel className="banner-container">
      {
        banners.map((bannerItem, bannerIndex) => {
          return (
            <div className="banner-item" key={bannerIndex} onClick={() => { onBannerClick(bannerItem.url) }}>
              <img className="banner-img" src={bannerItem.imageUrl} alt="" draggable={false} />
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
    <div></div>
  </div>
};

export default React.memo(Faxian);
