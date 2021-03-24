import service from '../index';

// 获取 banner( 轮播图 ) 数据
export const getBanner = data => {
  return service({
    url: `/banner`,
    method: 'get',
    params: data
  })
};

// 首页-发现-圆形图标入口列表
export const getFindBall = data => {
  return service({
    url: `/homepage/dragon/ball`,
    method: 'get',
    params: data
  })
};

// 获取推荐歌单
export const getPersonalized = data => {
  return service({
    url: `/personalized`,
    method: 'get',
    params: data
  })
};

// 获取每日推荐歌曲
export const dailySongs = data => {
  return service({
    url: `/recommend/songs`,
    method: 'get',
    params: data
  })
};

