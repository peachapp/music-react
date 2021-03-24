// home
// 子路由 默认为faxian
export function homeActiveSubroute(state = "faxian", action) {
  switch (action.type) {
    case 'UPDATE_homeActiveSubroute':
      return action.value;
    default:
      return state;
  }
};

// audio元素
export function audioRef(state = null, action) {
  switch (action.type) {
    case 'UPDATE_audioRef':
      return action.value;
    default:
      return state;
  }
};

// 当前正在播放的音乐
export function currentSong(state = null, action) {
  switch (action.type) {
    case 'UPDATE_currentSong':
      return Object.assign({}, action.state);
    default:
      return state;
  }
};

// 当前正在播放的音乐的播放进度
export function currentSongProgress(state = 0, action) {
  switch (action.type) {
    case 'UPDATE_currentSongProgress':
      return action.value;
    default:
      return state;
  }
};

// 当前正在播放的音乐的播放状态 暂停/播放
export function currentSongStatus(state = 0, action) {
  switch (action.type) {
    case 'UPDATE_currentSongStatus':
      return action.value;
    default:
      return state;
  }
};