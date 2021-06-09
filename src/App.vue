<template>
  <div>
    <router-view></router-view>
    <music-player :parentAudio="audio"></music-player>
  </div>
</template>
<script>
import router from './router/index';
import MusicPlayer from './views/main/MusicPlayer.vue';

export default {
  components: {
    MusicPlayer,
  },
  data() {
    return {
      audio: [
        {
          id: 0,
          name: '欢迎来到我的小型飞机场',
          artist: 'my-little-airport',
          url: ' ',
          cover: `${this.$base.mlaUrl}/album/img/2`,
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
        url: `${this.$base.mlaUrl}/${load.url}`,
        cover: `${this.$base.mlaUrl}/${load.songCoverUrl}`,
        artist: 'my-little-airport',
        theme: '#1a1a1a',
      };
      this.songIds.push(song.id);
      if (this.audio[0].url === ' ') {
        this.audio.pop();
      }
      this.audio.push(song);
    },
  },
  beforeMount() {
    const userId = localStorage.getItem('user-id');
    if (userId === null) {
      this.$api.user.register().then((res) => {
        console.log(res);
        localStorage.setItem('user-id', res.data.uuid);
      });
    } else {
      this.$api.album.getAlbumCollection(userId).then((res) => {
        res.data.forEach((item) => {
          this.$global.albumCollection.add(item.albumId);
        });
      });
      this.$api.song.getSongCollection(userId).then((res) => {
        res.data.forEach((item) => {
          this.$global.songCollection.add(item.songId);
        });
      });
    }
  },
  mounted() {
    this.$eventBus.$on('getRandomSong', (load) => this.addSong(load));
    this.$eventBus.$on('getSongItemReply', (load) => this.addSong(load));
    this.$eventBus.$on('changeRouter', (load) => {
      this.$router.push(load.path);
    });
    this.$eventBus.$on('addSongsInAlbum', (songs) => {
      songs.forEach((song) => {
        this.addSong(song);
      });
    });
  },
  router,
};
</script>
<style lang="scss" scoped>
div {
  background-color: #1a1a1a;
}
</style>
