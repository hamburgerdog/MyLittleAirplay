//  改用部署后的接口地址
const mlaUrl = 'http://175.24.126.146:8081/mla';
// const mlaUrl = 'http://127.0.0.1:8080/mla';
const base = {
  mlaUrl,
  albumCoverUrl: `${mlaUrl}/my_little_airplay_resource/album_cover`,
};

export default base;
