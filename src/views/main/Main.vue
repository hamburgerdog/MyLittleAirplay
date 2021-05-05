<template>
  <div>
    <main-head class="main-head"></main-head>
    <search></search>
    <main-swipe></main-swipe>
    <random-play></random-play>
    <ari-list></ari-list>
    <song-list></song-list>
  </div>
</template>

<script>
import Search from '../../components/MySearch.vue';
import SongList from '../../components/SongsList.vue';

import MainHead from './MainHead.vue';
import MainSwipe from './MainSwipe.vue';
import RandomPlay from './RandomPlay.vue';
import AriList from './AirList.vue';

export default {
  components: {
    MainHead,
    Search,
    MainSwipe,
    RandomPlay,
    AriList,
    SongList,
  },
};
</script>

<style lang="scss" scoped>
search {
  position: fixed;
  padding: 0;
  margin: 0.5rem 0;
  z-index: 4;
}

.main-head {
  position: fixed;
  top: 0;
  z-index: 4;
  padding: 0 1rem;
  width: 80%;
}
</style>
