<script>
// 定义全局接口地址
// const BASE_URL = 'http://192.168.2.164:8080/mla';
const BASE_URL = 'http://172.29.105.143:8080/mla';
const ALBUM_COVER_URL = `${BASE_URL}/my_little_airplay_resource/album_cover`;

//  节流函数
function THORTTLE(fn, delay = 500) {
  let timer = null;
  let canRun = true;
  // eslint-disable-next-line
  return function () {
    if (!canRun) return;
    canRun = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
      canRun = true;
    }, delay);
  };
}

export default {
  BASE_URL,
  ALBUM_COVER_URL,
  THORTTLE,
};
</script>
