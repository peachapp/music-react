import React, { useState, useEffect, useCallback } from 'react';
import { InputItem, Button, Checkbox } from 'antd-mobile';
import { loginInPhone } from 'axios/api/login';
import './index.less';

const AgreeItem = Checkbox.AgreeItem;

// const test = async () => {
//   const res = await loginInPhone({ phone: '18518137540', password: 'kangtaotao123' });
//   console.log('res', res);
// };
// test();

const LoginModel = () => {
  const [loginType, setLoginType] = useState("0"); // 0:验证码登录; 1:密码登录

  const [phoneByCode, setPhoneByCode] = useState("");
  const [code, setCode] = useState("");

  const [phoneBypass, setPhoneBypass] = useState("");
  const [password, setPassword] = useState("");


  return { loginType, setLoginType, phoneByCode, setPhoneByCode, code, setCode, phoneBypass, setPhoneBypass, password, setPassword };
};

const Login = () => {
  const { loginType, setLoginType, phoneByCode, setPhoneByCode, code, setCode, phoneBypass, setPhoneBypass, password, setPassword } = LoginModel();

  const LoginBox = () => {
    if (loginType === "0") {
      return <div className="login-content login-content-code">
        <div className="login-box login-box-code">
          <InputItem
            className="login-input"
            clear
            placeholder="请输入手机号"
            value={phoneByCode}
            onChange={setPhoneByCode}
          />
          <InputItem
            className="login-input"
            clear
            placeholder="获取验证码"
            value={code}
            onChange={setCode}
            extra={<div>获取验证码</div>}
          />
        </div>
        <div className="login-switch"><span onClick={() => { setLoginType('0'); }}>密码登录</span></div>
      </div>
    };

    return <div className="login-content login-content-pass">
      <div className="login-box login-box-pass">
        <InputItem
          className="login-input"
          clear
          placeholder="请输入手机号"
          value={phoneBypass}
          onChange={setPhoneBypass}
        />
        <InputItem
          className="login-input"
          clear
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="login-switch"><span onClick={() => { setLoginType('1'); }}>密码登录</span></div>
    </div>
  };

  return <div className="container login-container">
    <div className="login-logo">真音悦</div>
    <LoginBox />
    <Button className="login-btn">登录</Button>
    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
      Agree <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>agreement</a>
    </AgreeItem>
  </div>
};

export default Login;