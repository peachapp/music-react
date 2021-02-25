import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
//HashRouter最外层必须由它包裹
//Link用于点击跳转
//Switch路由唯一匹配
//Route配置路由规则
//Redirect跳转错误显示的页面
import Loading from 'components/loading/index';
const Login = lazy(() => import('pages/login/index'));
const Home = lazy(() => import('pages/home/index'));
const Test = lazy(() => import('pages/test/index'));
const NotFound = lazy(() => import('pages/notFound/index'));

const Routers = () => {
  return <HashRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/test' component={Test}></Route>
        <Route path='/notFound' component={NotFound}></Route>
        <Redirect to='/notFound'></Redirect>
      </Switch>
    </Suspense>
  </HashRouter>
};

export default Routers;