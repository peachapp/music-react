import service from '../index';

// 获取每日推荐歌曲
export const getDailySongs = data => {
  return service({
    url: `/recommend/songs`,
    method: 'get',
    params: data
  })
};