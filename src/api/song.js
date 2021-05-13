import axios from '@/utils/http';
import base from './base';

const song = {
  //  搜索歌曲功能
  searchSongByName(name) {
    return axios.get(`${base.mlaUrl}/song/name/${name}`);
  },
  getRandomSongsWithLimit(limited) {
    return axios.get(`${base.mlaUrl}/song/random/${limited}`);
  },
};

export default song;
