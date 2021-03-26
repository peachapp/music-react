import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
//HashRouter最外层必须由它包裹
//Link用于点击跳转
//Switch路由唯一匹配
//Route配置路由规则
//Redirect跳转错误显示的页面
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loading from 'components/loading/index';
const Login = lazy(() => import('pages/login/index'));
const Home = lazy(() => import('pages/home/index'));
const Songrcmd = lazy(() => import('pages/songrcmd/index'));
const Gedan = lazy(() => import('pages/gedan/index'));
const Player = lazy(() => import('pages/player/index'));
const Test = lazy(() => import('pages/test/index'));
const NotFound = lazy(() => import('pages/notFound/index'));

// import Login from 'pages/login/index';
// import Home from 'pages/home/index';
// import Songrcmd from 'pages/songrcmd/index';
// import Gedan from 'pages/gedan/index';
// import Player from 'pages/player/index';
// import Test from 'pages/test/index';
// import NotFound from 'pages/notFound/index';

const AnimationRoute = withRouter(({ location }) => {
  return (
    <TransitionGroup
      className={'router-container'}
      childFactory={child => React.cloneElement(
        child,
        {
          classNames: {
            enter: 'animated',
            enterActive: 'flipInY route-enter',
            exit: 'animated',
            exitActive: 'flipOutY route-exit',
          }
        }
      )}
    >
      <CSSTransition
        timeout={500}
        key={location.pathname}
      >
        <Switch location={location}>
          <Route path='/' exact component={Home}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/songrcmd' component={Songrcmd}></Route>
          <Route path='/gedan' component={Gedan}></Route>
          <Route path='/player' component={Player}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/test' component={Test}></Route>
          <Route path='/notFound' component={NotFound}></Route>
          <Redirect to='/notFound'></Redirect>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

const Routers = () => {
  return <HashRouter>
    <Suspense fallback={<Loading />}>
      <AnimationRoute />
    </Suspense>
  </HashRouter>
};

export default Routers;