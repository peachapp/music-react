import React from 'react';
import ReactDOM from 'react-dom';
import fastclick from 'fastclick';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { Provider } from 'react-redux';
import store from 'store';
import { ConfigProvider } from 'zarm'; // zarm全局配置
import 'zarm/dist/zarm.css'; // 引入zarm官方提供的 css 样式入口文件
import "common/reset.less";   // 清除浏览器默认样式

fastclick.attach(document.body);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <ConfigProvider primaryColor="#e20000" >
      <App />
    </ConfigProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
