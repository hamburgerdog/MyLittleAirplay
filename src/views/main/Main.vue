<template>
  <div
    class="app animate__animated animate__fadeIn"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <main-head class="main-head"></main-head>
    <search class="main-search"></search>
    <main-swipe></main-swipe>
    <random-play></random-play>
    <ari-list></ari-list>
    <song-list></song-list>
  </div>
</template>

<script>
import Search from '@/components/MySearch.vue';
import SongList from './SongsList.vue';

import MainHead from './MainHead.vue';
import MainSwipe from './MainSwipe.vue';
import RandomPlay from './RandomPlay.vue';
import AriList from './AirList.vue';

export default {
  data() {
    return {
      startX: 0,
      changeRouterX: 120,
    };
  },
  components: {
    MainHead,
    Search,
    MainSwipe,
    RandomPlay,
    AriList,
    SongList,
  },
  methods: {
    handleTouchStart(e) {
      this.startX = e.changedTouches[0].clientX;
    },
    handleTouchEnd(e) {
      if (this.startX - e.changedTouches[0].clientX >= this.changeRouterX) {
        this.$router.push('/albumList');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.animate__animated .animate__fadeIn {
  --animate-duration: 3s;
}

.app {
  display: flex;
  flex-direction: column;
  padding: 4.5rem 1rem 3.5rem 1rem;
}

search {
  position: fixed;
  padding: 0;
  margin: 0.5rem 0;
}
.main-search {
  z-index: 5;
}

.main-head {
  position: fixed;
  top: 0;
  left: 0.8rem;
  height: 4rem;
  z-index: 10;
  width: 91%;
}
</style>
