<template>
  <div class="app">
    <main-head class="main-head"></main-head>
    <search class="search"></search>
    <main-swipe></main-swipe>
    <random-play @randomplay="getRandomSong"></random-play>
    <ari-list></ari-list>
    <song-list @songitemfn="getSongItemReply"></song-list>
    <music-player :parentAudio="audio"></music-player>
  </div>
</template>
<script>
import { Search } from 'vant';

import Vue from 'vue';
import global_ from './Global.vue';

import MainHead from './components/MyHead.vue';
import MainSwipe from './components/MainSwipe.vue';
import RandomPlay from './components/RandomPlay.vue';
import AriList from './components/AirList.vue';
import SongList from './components/SongsList.vue';
import MusicPlayer from './components/MusicPlayer.vue';

Vue.prototype.GLOBAL = global_;

export default {
  components: {
    MainHead,
    Search,
    MainSwipe,
    RandomPlay,
    AriList,
    SongList,
    MusicPlayer,
  },
  data() {
    return {
      audio: [
        {
          id: 0,
          name: '欢迎来到我的小型飞机场1',
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
    getSongItemReply(load) {
      this.addSong(load);
    },
    getRandomSong(load) {
      this.addSong(load);
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  background-color: #1a1a1a;
}
.search {
  position: fixed;
  top: 3.6rem;
  padding: 0;
  margin: 0.5rem 0;
  z-index: 4;
  width: 90%;

  div:nth-child(1) {
    border-radius: 1.5rem;
    background-color: #010101;
    color: yellow;
  }
}

.main-head {
  position: fixed;
  top: 0;
  z-index: 4;
  width: 90%;
}

.app {
  display: flex;
  flex-direction: column;
  padding: 6.5rem 1rem 3.5rem 1rem;
}
</style>
