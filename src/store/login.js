// login 
// 登录方式 0:验证码登录; 1:密码登录 默认为1
export function loginType(state = "1", action) {
  switch (action.type) {
    case 'UPDATE_loginType':
      return action.value
    default:
      return state
  }
};
// 通过验证码登录的手机号
export function phoneByCode(state = "", action) {
  switch (action.type) {
    case 'UPDATE_phoneByCode':
      return action.value
    default:
      return state
  }
};
// 通过验证码登录的验证码
export function code(state = "", action) {
  switch (action.type) {
    case 'UPDATE_code':
      return action.value
    default:
      return state
  }
};
// 通过密码登录的手机号
export function phoneBypass(state = "", action) {
  switch (action.type) {
    case 'UPDATE_phoneBypass':
      return action.value
    default:
      return state
  }
};
// 通过密码登录的密码
export function password(state = "", action) {
  switch (action.type) {
    case 'UPDATE_password':
      return action.value
    default:
      return state
  }
};
// 是否同意用户协议 默认为false
export function agreeChecked(state = false, action) {
  switch (action.type) {
    case 'UPDATE_agreeChecked':
      return action.value
    default:
      return state
  }
};