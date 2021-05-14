<template>
  <div>
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
import SongItem from '../../components/SongItem.vue';

export default {
  data() {
    return {
      songs: [],
    };
  },
  components: {
    SongItem,
  },
  mounted() {
    this.$api.album
      .getSongsInAlbumById(this.$route.params.id)
      .then((response) => {
        this.songs = response.data;
      });
    this.$eventBus.$on('clickAddAlbumSongs', () => {
      this.$eventBus.$emit('addSongsInAlbum', this.songs);
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  span {
    display: none;
  }
}
.song-item {
  margin-top: 0.5rem;
}
</style>
