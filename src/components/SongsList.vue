<template>
  <div>
    <splice-bar :info="info"></splice-bar>
    <song-item
      class="song-item"
      v-for="song in songs"
      v-on="$listeners"
      :key="song.songId"
      :song="song"
    ></song-item>
  </div>
</template>

<script>
import axios from 'axios';
import SpliceBar from './SpliceBar.vue';
import SongItem from './SongItem.vue';

export default {
  data() {
    return {
      info: {
        engText: 'AIR Track',
        zhText: '歌曲',
      },
      songs: [],
    };
  },
  components: {
    SpliceBar,
    SongItem,
  },
  beforeMount() {
    axios.get(`${this.GLOBAL.BASE_URL}/song/random`).then((response) => {
      this.songs = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.song-item {
  margin-top: 0.5rem;
}
</style>
