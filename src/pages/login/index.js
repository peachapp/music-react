import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cell, Input, Button, Checkbox, Toast } from 'zarm';
import { getCaptcha, verifyCaptcha, loginInPhone } from 'axios/api/login';
import { phonePattern } from 'common/validate';
import './index.less';

const Login = () => {
  const history = useHistory();
  // data
  const loginType = useSelector(state => state.loginType); // 0:验证码登录; 1:密码登录

  // 验证码登录
  const phoneByCode = useSelector(state => state.phoneByCode);
  const code = useSelector(state => state.code);

  // 密码登录
  const phoneBypass = useSelector(state => state.phoneBypass);
  const password = useSelector(state => state.password);

  // 是否同意用户协议
  const agreeChecked = useSelector(state => state.agreeChecked);

  const dispatch = useDispatch();

  const [agreeItemClass, setAgreeItemClass] = useState("");

  // methods
  // 发送验证码
  const onGetCaptcha = async () => {
    try {
      if (!phoneByCode) {
        Toast.show({
          content: `请输入手机号！`,
          mask: true,
        });
        return false;
      };
      if (!phonePattern.test(phoneByCode)) {
        Toast.show({
          content: `请输入正确的手机号！`,
          mask: true,
        });
        return false;
      };
      const res = await getCaptcha({ phone: phoneByCode });
      if (res.code === 200) {
        Toast.show({
          content: `验证码已发送`,
          mask: true,
        });
      };
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      if (!agreeChecked) {
        setAgreeItemClass("rubberBand");
        Toast.show({
          content: `请同意用户协议！`,
          mask: true
        });
        let timer = setTimeout(function () {
          setAgreeItemClass("");
          clearTimeout(timer);
          timer = null;
        }, 500);
        return false;
      };

      if (loginType === "0") {
        if (!phoneByCode) {
          Toast.show({
            content: `请输入手机号！`,
            mask: true
          });
          return false;
        };
        if (!phonePattern.test(phoneByCode)) {
          Toast.show({
            content: `请输入正确的手机号！`,
            mask: true
          });
          return false;
        };
        if (!code) {
          Toast.show({
            content: `请输入验证码！`,
            mask: true
          });
          return false;
        };
        const res = await verifyCaptcha({ phone: phoneByCode, captcha: code });
        console.log('验证码res', res);
      } else {
        if (!phoneBypass) {
          Toast.show({
            content: `请输入手机号！`,
            mask: true
          });
          return false;
        };
        if (!phonePattern.test(phoneBypass)) {
          Toast.show({
            content: `请输入正确的手机号！`,
            mask: true
          });
          return false;
        };
        if (!password) {
          Toast.show({
            content: `请输入密码！`,
            mask: true
          });
          return false;
        };
        const res = await loginInPhone({ phone: phoneBypass, password: password });
        if (res.code === 200) {
          Toast.show({
            content: `登录成功`,
            mask: true
          });
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
          <Cell title="手机号">
            <Input
              type="number"
              maxLength={11}
              className="login-input"
              clearable
              placeholder="请输入手机号"
              value={phoneByCode}
              onChange={(value) => { dispatch({ type: 'UPDATE_phoneByCode', value }) }}
            />
          </Cell>
          <Cell title="验证码">
            <Input
              type="number"
              maxLength={4}
              className="login-input"
              clearable
              placeholder="获取验证码"
              value={code}
              onChange={(value) => { dispatch({ type: 'UPDATE_code', value }) }}
              extra={<div onClick={onGetCaptcha}>获取验证码</div>}
            />
          </Cell>
        </div>
        <div className="login-switch"><span onClick={() => { dispatch({ type: 'UPDATE_loginType', value: '1' }); }}>密码登录</span></div>
      </div>
    };

    return <div className="login-content login-content-pass" key="login-content-pass">
      <div className="login-box login-box-pass">
        <Cell title="手机号">
          <Input
            type="number"
            maxLength={11}
            className="login-input"
            clearable
            placeholder="请输入手机号"
            value={phoneBypass}
            onChange={(value) => { dispatch({ type: 'UPDATE_phoneBypass', value }) }}
          />
        </Cell>
        <Cell title="密码">
          <Input
            type="password"
            className="login-input"
            clearable
            placeholder="请输入密码"
            value={password}
            onChange={(value) => { dispatch({ type: 'UPDATE_password', value }) }}
          />
        </Cell>
      </div>
      <div className="login-switch"><span onClick={() => { dispatch({ type: 'UPDATE_loginType', value: '0' }); }}>验证码登录</span></div>
    </div>
  };

  return <div className="container login-container">
    <div className="login-logo">
      <svg aria-hidden="true" className="login-logo-icon">
        <use xlinkHref="#iconmusic" />
      </svg>
    </div>
    {renderLoginBox()}
    <Button className="login-btn" theme="primary" onClick={onSubmit}>登录</Button>
    <div className={["agreement-container", "animated", agreeItemClass].join(" ")} >
      <Checkbox id="agreement" checked={agreeChecked} onChange={e => { dispatch({ type: 'UPDATE_agreeChecked', value: e.target.checked }) }} />
      <label htmlFor="agreement">
        <span>同意</span>
        <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户协议》</span>
        <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《隐私政策》</span>
        <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《儿童隐私政策》</span>
      </label>
    </div>
  </div>
};

export default React.memo(Login);