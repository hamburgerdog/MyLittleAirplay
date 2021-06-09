import axios from '@/utils/http';
import base from './base';

const album = {
  getAlbumNameByAlbumId(albumId) {
    return axios.get(`${base.mlaUrl}/album/name/${albumId}`);
  },
  getAlbumById(albumId) {
    return axios.get(`${base.mlaUrl}/album/${albumId}`);
  },
  getSongsInAlbumById(albumId) {
    return axios.get(`${base.mlaUrl}/album/albumSongs/${albumId}`);
  },
  getAlbums() {
    return axios.get(`${base.mlaUrl}/album/albums`);
  },
  getAlbumCollection(userId) {
    return axios.get(`${base.mlaUrl}/album/like/${userId}`);
  },
  removeAlbumFromCollection(userId, albumId) {
    return axios.delete(`${base.mlaUrl}/album/like/${userId}/${albumId}`);
  },
  addAlbumToCollection(userId, albumId) {
    return axios.put(`${base.mlaUrl}/album/like/${userId}/${albumId}`);
  },
};

export default album;
