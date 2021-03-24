import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import { TabBar } from 'zarm';
import MiniPlayer from 'components/miniPlayer';
import Faxian from './components/faxian/index';
import Boke from './components/boke/index';
import Wode from './components/wode/index';
import Kge from './components/kge/index';
import Yuncun from './components/yuncun/index';

import './index.less';

const Home = (props) => {
  const history = useHistory();
  // props

  // data
  const homeActiveSubroute = useSelector(state => state.homeActiveSubroute);
  const currentSong = useSelector(state => state.currentSong);

  const dispatch = useDispatch();

  // methods

  useEffect(() => {
    history.push(`/home/${homeActiveSubroute}`);
  }, [history, homeActiveSubroute])

  return <div className={`container home-container ${currentSong ? 'home-container-mini' : ''}`}>
    <div className="home-content">
      <Switch>
        <Route path='/home/' exact component={Faxian}></Route>
        <Route path='/home/faxian' component={Faxian}></Route>
        <Route path='/home/boke' component={Boke}></Route>
        <Route path='/home/wode' component={Wode}></Route>
        <Route path='/home/kge' component={Kge}></Route>
        <Route path='/home/yuncun' component={Yuncun}></Route>
      </Switch>
    </div>
    {currentSong ? <MiniPlayer className="home-miniplayer" /> : ""}
    <TabBar
      className="tabbar-container"
      activeKey={homeActiveSubroute}
      onChange={(value) => { dispatch({ type: 'UPDATE_homeActiveSubroute', value }) }}>
      <TabBar.Item
        itemKey="faxian"
        title="发现"
        icon={
          <i className="iconfont iconshouye tabbar-icon" />
        }
      />
      <TabBar.Item
        itemKey="boke"
        title="播客"
        icon={
          <i className="iconfont icondianshi tabbar-icon" />
        }
      />
      <TabBar.Item
        itemKey="wode"
        title="我的"
        icon={
          <i className="iconfont iconhuiyuan tabbar-icon" />
        }
      />
      <TabBar.Item
        itemKey="kge"
        title="K歌"
        icon={
          <i className="iconfont iconyinle tabbar-icon" />
        }
      />
      <TabBar.Item
        itemKey="yuncun"
        title="云村"
        icon={
          <i className="iconfont iconpinglun tabbar-icon" />
        }
      />
    </TabBar>
  </div>
};

export default React.memo(Home);
