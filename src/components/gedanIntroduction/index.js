import React from 'react';
import { Icon } from 'zarm';
import "./index.less";

const GedanIntroduction = (props) => {
  // props
  const { coverImgUrl, name, tags, description, onHide } = props || {};

  // methods
  const onSaveCover = (event) => {
    event.stopPropagation();
    event.cancelBubble = true;

    console.log('click');
  };

  return <div className="gedan-introduction-container" onClick={onHide}>
    <Icon className="gedan-introduction-close" type="wrong" />
    <div className="gedan-introduction-content">
      <img className="gedan-introduction-img" src={coverImgUrl} alt="" />
      <div className="gedan-introduction-name">
        {name}
      </div>
    </div>
    <div className="gedan-introduction-other">
      <div className="gedan-introduction-tags">
        <span className="gedan-introduction-tag-label">标签：</span>
        {
          (tags || []).map((tagItem, tagIndex) => {
            return <span className="gedan-introduction-tag-value" key={tagIndex}>{tagItem}</span>
          })
        }
      </div>
      <div className="gedan-introduction-description">
        {
          ((description || "").split('\n\n') || []).map((descriptionItem, descriptionIndex) => {
            return <div className="gedan-introduction-description-value" key={descriptionIndex}>{descriptionItem}</div>
          })
        }
      </div>
    </div>
    <a className="gedan-introduction-save" href={coverImgUrl} download="封面图片" onClick={onSaveCover}>保存封面</a>
    <div className="gedan-introduction-bg" style={{ 'backgroundImage': `url(${coverImgUrl})` }}></div>
    <div className="gedan-introduction-mask"></div>
  </div>
};

export default React.memo(GedanIntroduction);
