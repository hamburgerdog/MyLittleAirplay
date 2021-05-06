<template>
  <div>
    <router-view></router-view>
    <music-player :parentAudio="audio"></music-player>
  </div>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
import router from './router/index';
import global_ from './Global.vue';

import MusicPlayer from './views/main/MusicPlayer.vue';

Vue.use(Lazyload);
Vue.prototype.GLOBAL = global_;
Vue.prototype.$eventBus = new Vue();

export default {
  components: {
    MusicPlayer,
  },
  data() {
    return {
      audio: [
        {
          id: 0,
          name: '欢迎来到我的小型飞机场',
          artist: 'my-little-airport',
          url: ' ',
          cover: `${this.GLOBAL.BASE_URL}/album/img/2`,
          theme: '#1a1a1a',
        },
      ],
      songIds: [0],
    };
  },
  methods: {
    addSong(load) {
      if (this.songIds.includes(load.songId)) {
        return;
      }
      const song = {
        id: load.songId,
        name: load.songName,
        url: `${this.GLOBAL.BASE_URL}/${load.url}`,
        cover: `${this.GLOBAL.BASE_URL}/${load.songCoverUrl}`,
        artist: 'my-little-airport',
        theme: '#1a1a1a',
      };
      this.songIds.push(song.id);
      this.audio.push(song);
    },
  },
  mounted() {
    this.$eventBus.$on('getRandomSong', (load) => this.addSong(load));
    this.$eventBus.$on('getSongItemReply', (load) => this.addSong(load));
    this.$eventBus.$on('changeRouter', (load) => {
      this.$router.push(load.path);
    });
  },
  router,
};
</script>
<style lang="scss" scoped>
div {
  background-color: #1a1a1a;
}
</style>
