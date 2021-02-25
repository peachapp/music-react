import axios from "axios";


/****** 创建axios实例 ******/
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 60000 // 请求超时时间
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(response => {
  // response.headers['Content-Type'] = 'application/json';
  // token 测试
  if (response.headers.authorization) {
    let authorization = response.headers.authorization
    if (authorization.startsWith('Bearer ') || authorization.startsWith('bearer ')) {
      localStorage.setItem('TOKEN', authorization);
    }
  } else if (!response.headers.authorization) {
    response.headers.authorization = 'Bearer ' + localStorage.getItem('TOKEN')
  }

  if (response.data && response.data.meta && response.data.meta.success === false) {
    return Promise.reject(response)
  }

  return response
  // config.method === 'post'
  //     ? config.data = qs.stringify({ ...config.data })
  //     : config.params = { ...config.params };
  //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

}, error => { //请求错误处理
  Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => { //成功请求到数据
    //这里根据后端提供的数据进行对应的处理
    if (response.data.code === 200) {
      // 请求成功将response.data返回
      return response.data;
    } else if (response.data.code === 401) {
      // store.dispatch('Login')
    }
    else {
      return response;
    }
  },
  error => { //响应错误处理
    // 如果是某个请求被业务代码, 取消掉导致的错误, 则不处理, 直接将错误返回给业务代码
    if (axios.isCancel(error)) {
      // console.info('Axios 拦截器, 取消请求导致的错误')
      return Promise.reject(error)
    };

    // 401 错误, 重新登录获取token
    if (error.response && error.response.status === 401) {
      // store.dispatch('Login')
    };
    let errMsg = error.message || error.data.message
    if (errMsg !== false) {
      if (errMsg === '' || errMsg === null || errMsg === undefined) {
        errMsg = '获取数据时发生了未知错误'
      };
      if (errMsg.indexOf('timeout') >= 0) {
        errMsg = '请求超时'
      };
    };
    return Promise.reject(error)
  }
);

export default service