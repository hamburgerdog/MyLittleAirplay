import axios from 'axios';
import { Notify } from 'vant';

//  网络失败的警示，使用vant的通知组件
const dangerTip = (msg) => {
  Notify({
    background: '#fe5f64',
    message: msg,
  });
};

//  错误处理函数
const errorHandler = (status, other) => {
  switch (status) {
    case 404:
      dangerTip('【请求失败】请求内容不存在');
      break;
    case 500:
      dangerTip('【请求失败】服务器错误');
      break;
    default:
      dangerTip(other);
  }
};

//  axios的默认配置
const instance = axios.create({
  //  超时时间为10s
  timeout: 1000 * 10,
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//  重点：拦截器！
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  },
  (error) => {
    // 此处无法捕捉到vant_image专辑图片获取的异常只捕捉通过AXIOS的异常
    errorHandler(error.status, error.message);
    return Promise.reject(error);
  },
);

export default instance;
