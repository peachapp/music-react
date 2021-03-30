import React, { useState, useEffect } from 'react';
import "./index.less";
// React Virtualized 成熟的库

const List = (props) => {
  // props
  const { className, dataSource, pageSize, itemHeight, callback, children } = props || {};

  // data
  const [startIndex, setStartIndex] = useState(0);
  const [translateTop, setTranslateTop] = useState(0);
  const [visibleCount, setVisibleCount] = useState(pageSize);

  // 
  useEffect(() => {
    if (!pageSize) {
      const count = Math.ceil(window.innerHeight / itemHeight);
      setVisibleCount(count);
    };
  }, [pageSize, itemHeight]);

  useEffect(() => {
    callback((dataSource || []).slice(
      startIndex,
      startIndex + visibleCount
    ));
  }, [dataSource, startIndex, visibleCount]);


  // methods
  const onScroll = (event) => {
    const { scrollTop } = event.target;
    setTranslateTop(scrollTop - (scrollTop % itemHeight))
    let index = Math.floor(scrollTop / itemHeight);
    if (startIndex !== index) {
      setStartIndex(index);
    }
  };

  return <div className={`infinite-list-container ${className || ''}`} onScroll={onScroll} >
    <div
      className="infinite-list-ghost"
      style={{ height: dataSource.length * itemHeight + 'px' }}
    >
      <div
        className="infinite-list"
        style={{ transform: 'translateY(' + translateTop + 'px)' }}
      >
        {
          React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            };
            const childProps = {
              ...child.props,
              className: `${child.props.className} infinite-item`
            };
            return React.cloneElement(child, childProps)
          })
        }
      </div >
    </div >
  </div >
};

export default React.memo(List);
