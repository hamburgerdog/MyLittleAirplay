import axios from 'axios';
import { Notify } from 'vant';

const dangerTip = (msg) => {
  Notify({
    type: msg,
    message: '【请求失败】服务器错误',
  });
};

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

const instance = axios.create({
  timeout: 1000 * 10,
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  },
  (error) => {
    const { response } = error;
    if (response) {
      errorHandler(error.status, error.data.message);
    } else {
      dangerTip('【网络错误】网络连接失败');
    }
    return Promise.reject(response);
  },
);

export default instance;
