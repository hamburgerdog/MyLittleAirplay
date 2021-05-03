<template>
  <div class="app">
    <main-head class="main-head"></main-head>
    <search class="search"></search>
    <main-swipe></main-swipe>
    <random-play></random-play>
    <ari-list></ari-list>
    <song-list></song-list>
    <music-player></music-player>
  </div>
</template>
<script>
import { Search } from 'vant';
import MainHead from './components/MyHead.vue';
import MainSwipe from './components/MainSwipe.vue';
import RandomPlay from './components/RandomPlay.vue';
import AriList from './components/AriList.vue';
import SongList from './components/SongsList.vue';
import MusicPlayer from './components/MusicPlayer.vue';

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
