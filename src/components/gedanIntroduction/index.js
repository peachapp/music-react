import React from 'react';
import "./index.less";

const GedanIntroduction = (props) => {
  // props
  const { coverImgUrl, name, tags, description, onHide } = props || {};


  return <div className="gedan-introduction-container" onClick={onHide}>
    <div className="gedan-introduction-content">
      <img className="gedan-introduction-img" src={coverImgUrl} alt="" />
      <div className="gedan-introduction-name">
        {name}
      </div>

      <div>保存封面</div>
    </div>
    <div className="gedan-introduction-bg" style={{ 'backgroundImage': `url(${coverImgUrl})` }}></div>
    <div className="gedan-introduction-mask"></div>
  </div>
};

export default React.memo(GedanIntroduction);
