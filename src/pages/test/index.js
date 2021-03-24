import React from 'react';
import Player from 'pages/player/index';
import "./index.less";

const Test = () => {
  return <div className="container test-container">
    <Player
      src="https://audio04.dmhmusic.com/71_53_T10059129149_128_4_1_0_sdk-cpm/cn/0412/M00/90/0A/ChAKEmBFoCuAcZ4rACUFub7q1kk144.mp3?xcode=6d8888bf320ff8977e6f34086caac4ce3972c9b"
      imgUrl="https://img01.yzcdn.cn/vant/cat.jpeg"
      musicName="系数是"
      playStatus="play"
      onPlayStatusChange={() => { }}
      onPlayListView={() => { }} />
  </div>
};

export default React.memo(Test);
