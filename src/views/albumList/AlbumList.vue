<template>
  <div
    class="app animate__animated animate__fadeIn"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <app-head :HeaderFromParent="Header"></app-head>
    <div>
      <van-image
        class="albums-image"
        :width="Image.width"
        :height="Image.height"
        :src="Image.imageUrl"
        fit="cover"
        lazy-load
        :radius="Image.radius"
        @click="flipX"
      />
      <p class="albums-text">聖誕再多留一日</p>
    </div>
    <div class="hr"></div>
    <div class="list" v-for="album in Albums" :key="album.albumId">
      <van-image
        class="albums-image"
        :width="Image.width"
        :height="Image.height"
        :src="'/image/album' + album.albumId + '.webp'"
        fit="cover"
        lazy-load
        :radius="Image.radius"
        @click="goToAlbum(album.albumId)"
        @error="imgError"
      />
      <p class="albums-text">{{ album.albumName }}</p>
      <div class="hr"></div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
import image from '../../assets/mock/albums.webp';
import AppHead from '../../components/RouterBackHead.vue';

export default {
  data() {
    return {
      Header: {
        text: '一起去动物园逛街才是正经事',
      },
      Image: {
        width: '16rem',
        height: '12rem',
        radius: '1rem',
        imageUrl: image,
      },
      Albums: [],
      AlbumCoverUrl: this.$base.albumCoverUrl,
      startX: 0,
      changeRouterX: 120,
      canFlip: true,
    };
  },
  components: {
    AppHead,
    VanImage,
  },
  mounted() {
    this.$api.album.getAlbums().then((response) => {
      this.Albums = response.data;
    });
  },
  methods: {
    goToAlbum(albumId) {
      this.$eventBus.$emit('changeRouter', {
        path: `/album/${albumId}`,
      });
    },
    handleTouchStart(e) {
      this.startX = e.changedTouches[0].clientX;
    },
    handleTouchEnd(e) {
      if (e.changedTouches[0].clientX - this.startX >= this.changeRouterX) {
        this.$router.back();
      }
      if (this.startX - e.changedTouches[0].clientX >= this.changeRouterX) {
        this.$router.go(1);
      }
    },
    flipX(event) {
      const delay = 3000;
      this.$global.deBounceAddAnimate(
        event.srcElement,
        'animate__flipInX',
        this.canFlip,
        delay,
      );
      this.$toast.fail({
        type: 'fail',
        message: '这个专辑\n『不存在』',
        overlay: true,
        closeOnClickOverlay: true,
        duration: delay,
      });
    },
    imgError(err) {
      this.$throw(err);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;

  .hr {
    width: 100%;
  }
}

.albums-image {
  box-shadow: 1rem 1rem 1.5rem #000;
  border: 4px solid #ddd;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.albums-text {
  width: 90%;
  letter-spacing: 0.1rem;
  color: rgba($color: #eee, $alpha: 0.8);
  padding: 0.4rem 1rem;
  text-align: center;
  z-index: 2;
  font-weight: 500;
  padding: 0.2rem;
}
.hr {
  height: 2px;
  width: 90%;
  background-color: rgba(128, 128, 128, 0.3);
  box-shadow: 0.2rem -0.3rem 0.4rem #000;
}
</style>
