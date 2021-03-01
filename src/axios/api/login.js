import service from '../index';

// 发送验证码
export const getCaptcha = data => {
  return service({
    url: `/captcha/sent`,
    method: 'post',
    data
  })
};

// 验证验证码
export const verifyCaptcha = data => {
  return service({
    url: `/captcha/verify`,
    method: 'post',
    data
  })
};

// 手机登录
export const loginInPhone = data => {
  return service({
    url: `/login/cellphone`,
    method: 'post',
    data
  })
};

// 邮箱登录
export const loginInEmail = data => {
  return service({
    url: `/login`,
    method: 'post',
    data
  })
};

