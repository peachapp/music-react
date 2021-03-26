import service from '../index';

// 获取歌单详情
export const getPlayList = data => {
  return service({
    url: `/playlist/detail`,
    method: 'get',
    params: data
  })
};

