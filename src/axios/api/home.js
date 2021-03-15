import service from '../index';

// 获取 banner( 轮播图 ) 数据
export const getBanner = data => {
  return service({
    url: `/banner`,
    method: 'get',
    params: data
  })
};

