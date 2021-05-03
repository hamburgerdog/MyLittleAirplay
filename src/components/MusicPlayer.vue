<template>
  <div>
    <music-player
      class="mPlayer"
      :audio="audio"
      :lrcType="3"
      :fixed="true"
      :mini="false"
    ></music-player>
  </div>
</template>

<script>
import { APlayer as MusicPlayer } from '@moefe/vue-aplayer';

export default {
  data() {
    return {
      audio: {
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/hls/frozen.m3u8',
        cover: 'https://p1.music.126.net/n72JJkPg2-ENxhB-DsZ2AA==/109951163115400390.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        type: 'customHls',
      },
    };
  },
  components: {
    MusicPlayer,
  },
};
</script>
<style lang="scss" scoped>
</style>
