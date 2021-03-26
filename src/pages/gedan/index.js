import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getPlayList } from 'axios/api/gedan';
import "./index.less";

const Gedan = () => {
  const history = useHistory();
  const { id } = history.location.params || {};

  // onGetPlayList
  const onGetPlayList = async () => {
    try {
      const res = await getPlayList({ id });
      console.log('res', res)
    } catch (error) {
      console.log(error);
    };
  };

  // 
  useEffect(() => {
    onGetPlayList();
  }, []);

  console.log('id', id);
  return <div className="gedan-container">
    歌单
  </div>
};

export default React.memo(Gedan);
