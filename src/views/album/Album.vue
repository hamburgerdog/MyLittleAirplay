<template>
  <div
    class="animate__animated animate__fadeIn"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <album-head :HeaderFromParent="Header"></album-head>
    <div class="app">
      <search class="search"></search>
      <info :CardInfoFromParent="CardInfo"></info>
      <album-songs class="song-list"></album-songs>
    </div>
  </div>
</template>

<script>
import AlbumHead from '../../components/RouterBackHead.vue';
import Search from '../../components/MySearch.vue';
import Info from './AlbumInfo.vue';
import AlbumSongs from './AlbumSongsList.vue';
import AlbumInfoMap from '../../assets/mock/AlbumData';

export default {
  data() {
    return {
      CardInfo: {
        cardText: 'loading...',
        imgUrl: '',
        cardFooter: 'loading......',
      },
      Header: {
        text: 'loading... ',
      },
      AlbumInfoMap,
      startX: 0,
      changeRouterX: 180,
    };
  },
  components: {
    AlbumHead,
    Search,
    Info,
    AlbumSongs,
  },
  mounted() {
    this.$api.album.getAlbumById(this.$route.params.id).then((response) => {
      this.$eventBus.$emit(
        'getAlbumCoverUrl',
        `${this.$base.albumCoverUrl}/${response.data.albumCoverUrl}`,
      );
      const albumInfo = this.AlbumInfoMap.get(`${response.data.albumId}`);
      this.Header.text = albumInfo.cardText;
      this.CardInfo.cardText = albumInfo.cardText;
      this.CardInfo.cardFooter = albumInfo.cardFooter;
    });
  },
  methods: {
    handleTouchStart(e) {
      this.startX = e.changedTouches[0].clientX;
    },
    handleTouchEnd(e) {
      if (e.changedTouches[0].clientX - this.startX >= this.changeRouterX) {
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: #1a1a1a;
  z-index: 4;
}
.app {
  padding: 3.5rem 0.5rem 3.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.song-list {
  width: 95%;
}
</style>
