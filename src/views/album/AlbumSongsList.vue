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
import axios from 'axios';
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
    axios.get(`${this.GLOBAL.BASE_URL}/album/albumSongs/${this.$route.params.id}`).then((response) => {
      this.songs = response.data;
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
