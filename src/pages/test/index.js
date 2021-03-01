import Player from 'components/player/index';
import "./index.less";

const Test = () => {
  return <div className="container test-container">
    <Player
      src="http://m10.music.126.net/20210301160755/2d7ecb3a3899c97046cd89d520799427/ymusic/5353/0f0f/0358/d99739615f8e5153d77042092f07fd77.mp3"
      imgUrl="https://img01.yzcdn.cn/vant/cat.jpeg"
      musicName="系数是"
      playStatus="play"
      onPlayStatusChange={() => { }}
      onPlayListView={() => { }} />
  </div>
};

export default Test;
