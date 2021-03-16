import React from 'react';
import { useHistory } from 'react-router-dom';
import "./index.less";

const Gedan = () => {
  const history = useHistory();
  const { id } = history.location.params || {};
  console.log('id', id);
  return <div className="gedan-container">
    歌单
  </div>
};

export default React.memo(Gedan);
