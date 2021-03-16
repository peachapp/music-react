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
// banners
export function banners(state = [], action) {
  switch (action.type) {
    case 'UPDATE_banners':
      return action.value
    default:
      return state
  }
};
// 推荐歌单
export function homePersonalizeds(state = [], action) {
  switch (action.type) {
    case 'UPDATE_homePersonalizeds':
      return action.value
    default:
      return state
  }
};

