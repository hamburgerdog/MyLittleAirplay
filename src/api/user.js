import axios from '@/utils/http';
import base from './base';

const user = {
  register() {
    return axios.get(`${base.mlaUrl}/user/register`);
  },
  login(key) {
    return axios.get(`${base.mlaUrl}/user/login/${key}`);
  },
};

export default user;
