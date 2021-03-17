// home
// 子路由 默认为faxian
export function homeActiveSubroute(state = "faxian", action) {
  switch (action.type) {
    case 'UPDATE_homeActiveSubroute':
      return action.value
    default:
      return state
  }
};

