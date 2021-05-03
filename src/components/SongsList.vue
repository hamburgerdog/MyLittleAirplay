<template>
  <div>
    <splice-bar :info="info"></splice-bar>
    <song-item
      class="song-item"
      v-for="songId in songs"
      :key="songId"
    ></song-item>
  </div>
</template>

<script>
import SpliceBar from './SpliceBar.vue';
import SongItem from './SongItem.vue';

export default {
  data() {
    return {
      info: {
        engText: 'AIR Track',
        zhText: '歌曲',
      },
      songs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    };
  },
  components: {
    SpliceBar,
    SongItem,
  },
};
</script>

<style lang="scss" scoped>
.song-item {
  margin-top: 0.5rem;
}
</style>
