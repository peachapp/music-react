import React from 'react';
import ReactDOM from 'react-dom';
import fastclick from 'fastclick';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'antd-mobile/dist/antd-mobile.less'; // 引入官方提供的 less 样式入口文件
import "common/theme-file.less";   // 用于覆盖上面定义的变量

fastclick.attach(document.body);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
