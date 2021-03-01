import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { InputItem, Button, Checkbox, Toast } from 'antd-mobile';
import { getCaptcha, verifyCaptcha, loginInPhone } from 'axios/api/login';
import { phonePattern } from 'common/validate';
import './index.less';

const AgreeItem = Checkbox.AgreeItem;


const Login = () => {
  const history = useHistory();
  // data
  const [loginType, setLoginType] = useState("1"); // 0:验证码登录; 1:密码登录

  const [phoneByCode, setPhoneByCode] = useState("");
  const [code, setCode] = useState("");

  const [phoneBypass, setPhoneBypass] = useState("");
  const [password, setPassword] = useState("");

  const [agreeChecked, setAgreeChecked] = useState(false);

  // methods
  // 发送验证码
  const onGetCaptcha = async () => {
    try {
      if (!phoneByCode) {
        Toast.info(`请输入手机号！`);
        return false;
      };
      if (!phonePattern.test(phoneByCode)) {
        Toast.info(`请输入正确的手机号！`);
        return false;
      };
      const res = await getCaptcha({ phone: phoneByCode });
      if (res.code === 200) {
        Toast.success(`验证码已发送`);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      if (!agreeChecked) {
        Toast.info(`请同意用户协议！`);
        return false;
      };

      if (loginType === "0") {
        if (!phoneByCode) {
          Toast.info(`请输入手机号！`);
          return false;
        };
        if (!phonePattern.test(phoneByCode)) {
          Toast.info(`请输入正确的手机号！`);
          return false;
        };
        if (!code) {
          Toast.info(`请输入验证码！`);
          return false;
        };
        const res = await verifyCaptcha({ phone: phoneByCode, captcha: code });
        console.log('验证码res', res);
      } else {
        if (!phoneBypass) {
          Toast.info(`请输入手机号！`);
          return false;
        };
        if (!phonePattern.test(phoneBypass)) {
          Toast.info(`请输入正确的手机号！`);
          return false;
        };
        if (!password) {
          Toast.info(`请输入密码！`);
          return false;
        };
        const res = await loginInPhone({ phone: phoneBypass, password: password });
        if (res.code === 200) {
          Toast.success(`登录成功`);
          localStorage.setItem('token', res.token);
          localStorage.setItem('userinfo', JSON.stringify({
            account: res.account,
            bindings: res.bindings,
            profile: res.profile,
          }));
          history.push("/home");
        };
      };
    } catch (error) {
      console.log(error);
    };
  };


  const renderLoginBox = () => {
    if (loginType === "0") {
      return <div className="login-content login-content-code" key="login-content-code">
        <div className="login-box login-box-code">
          <InputItem
            type="number"
            maxLength="11"
            className="login-input"
            clear
            placeholder="请输入手机号"
            value={phoneByCode}
            onChange={setPhoneByCode}
          />
          <InputItem
            type="number"
            maxLength="4"
            className="login-input"
            clear
            placeholder="获取验证码"
            value={code}
            onChange={setCode}
            extra={<div onClick={onGetCaptcha}>获取验证码</div>}
          />
        </div>
        <div className="login-switch"><span onClick={() => { setLoginType('1'); }}>密码登录</span></div>
      </div>
    };

    return <div className="login-content login-content-pass" key="login-content-pass">
      <div className="login-box login-box-pass">
        <InputItem
          type="number"
          maxLength="11"
          className="login-input"
          clear
          placeholder="请输入手机号"
          value={phoneBypass}
          onChange={setPhoneBypass}
        />
        <InputItem
          type="password"
          className="login-input"
          clear
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="login-switch"><span onClick={() => { setLoginType('0'); }}>验证码登录</span></div>
    </div>
  };

  return <div className="container login-container">
    <div className="login-logo">真音悦</div>
    {renderLoginBox()}
    <Button className="login-btn" type="primary" onClick={onSubmit}>登录</Button>
    <AgreeItem className="agree-item" checked={agreeChecked} onChange={e => { setAgreeChecked(e.target.checked) }}>
      <span>同意</span>
      <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户协议》</span>
      <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《隐私政策》</span>
      <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《儿童隐私政策》</span>
    </AgreeItem>
  </div>
};

export default Login;