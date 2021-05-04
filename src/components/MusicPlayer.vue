<template>
  <div>
    <music-player
      class="mPlayer"
      :audio="audio"
      :lrcType="3"
      :fixed="true"
      :mini="false"
    ></music-player
    >
  </div>
</template>

<script>
import { APlayer as MusicPlayer } from '@moefe/vue-aplayer';
import mp3 from '../assets/mock/下了两天雨.mp3';

export default {
  data() {
    return {
      audio: {
        name: '下了两天雨',
        artist: 'my little airport ',
        url: mp3,
        cover: 'http://localhost:8080/album/img/2', // prettier-ignore
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
