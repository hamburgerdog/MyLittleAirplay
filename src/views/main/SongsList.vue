<template>
  <div>
    <div class="song-splice">
      <splice-bar :info="info"></splice-bar>
    </div>
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
import SpliceBar from '../../components/SpliceBar.vue';
import SongItem from '../../components/SongItem.vue';

export default {
  data() {
    return {
      info: {
        engText: 'AIR Track',
        zhText: '歌曲',
        unshow: true,
      },
      songs: [],
    };
  },
  components: {
    SpliceBar,
    SongItem,
  },
  beforeMount() {
    this.$api.song.getRandomSongsWithLimit(5).then((response) => {
      this.songs = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.song-splice{
  padding: 0.5rem 0;
}
.song-item {
  margin-top: 0.5rem;
}
</style>
