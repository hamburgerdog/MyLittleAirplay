<template>
  <div class="app">
    <main-head class="main-head"></main-head>
    <search class="search"></search>
    <div>
      <van-swipe
        @change="onChange"
        id="swipe"
        class="my-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="indicators">
        <div
          v-for="item in indicators"
          :key="item.id"
          :class="current === item.id ? 'active-indicator' : 'custom-indicator'"
        ></div>
      </div>
    </div>
    <random-play></random-play>
    <ari-list></ari-list>
    <song-list></song-list>
    <music-player></music-player>
  </div>
</template>
<script>
import { Search, Swipe, SwipeItem } from 'vant';
import mainHead from './components/Head.vue';
import randomPlay from './components/RandomPlay.vue';
import AriList from './components/AriList.vue';
import SongList from './components/SongsList.vue';
import MusicPlayer from './components/MusicPlayer.vue';

export default {
  data() {
    return {
      current: 0,
      indicators: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  components: {
    mainHead,
    Search,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    randomPlay,
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

.my-swipe {
  border-radius: 0.8rem;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 7.5rem;
  text-align: center;
  background-color: #2f3031;
}

.indicators {
  position: relative;
  top: -7rem;
  left: 13rem;
  display: flex;
  width: 3rem;
  justify-content: space-around;
  align-items: center;
  background: none;
  div {
    border-radius: 50%;
    right: 1rem;
    top: 1rem;
    width: 0.4rem;
    height: 0.4rem;
    background-color: rgba($color: #fff, $alpha: 0.3);
  }
}

.active-indicator {
  width: 0.6rem !important;
  height: 0.6rem !important;
  background-color: rgba($color: #010101, $alpha: 0.2) !important;
}
</style>
