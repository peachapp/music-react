import React, { useState, useEffect, useCallback } from 'react';
import { Carousel } from 'zarm';
import './index.less';

const Faxian = (props) => {
  // props
  const { banners = ['https://static.zhongan.com/website/health/zarm/images/banners/1.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/3.png',] } = props;

  // data

  // renderFunction
  const renderBanners = () => {
    return <Carousel className="banner-container">
      {
        banners.map((bannerItem, bannerIndex) => {
          return (
            <div className="banner-item" key={bannerIndex}>
              <img className="banner-img" src={bannerItem} alt="" draggable={false} />
            </div>
          );
        })
      }
    </Carousel>
  };

  return <div className="faxian-container">
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
    {renderBanners()}
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
  </div>
};

export default React.memo(Faxian);
