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
  getSongCollection(userId) {
    return axios.get(`${base.mlaUrl}/song/like/${userId}`);
  },
  removeSongFromCollection(userId, SongId) {
    return axios.delete(`${base.mlaUrl}/song/like/${userId}/${SongId}`);
  },
  addSongToCollection(userId, SongId) {
    return axios.put(`${base.mlaUrl}/song/like/${userId}/${SongId}`);
  },
};

export default song;
