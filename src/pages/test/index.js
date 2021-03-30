import React, { useState } from 'react';
import List from 'components/list';
import "./index.less";

const data = new Array(10000).fill(2).map((item, index) => index + 1);
const Test = () => {
  const [renderList, setRenderList] = useState([]);

  const onGetRenderList = (arr) => {
    setRenderList(arr);
  };
  return <div className="container test-container">
    <List dataSource={data} pageSize={12} itemHeight={300} callback={onGetRenderList}>
      {
        renderList.map((item, index) => {
          return <div className="item222" key={index}>{item}</div>
        })
      }
    </List>
  </div>
};

export default React.memo(Test);
