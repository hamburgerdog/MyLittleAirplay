<template>
  <div class="song-box" @click="click">
    <div class="song-img">
      <van-image
        width="2.2rem"
        height="2.2rem"
        radius=".4rem"
        fit="cover"
        lazy-load
        :src="`${this.base.mlaUrl}/album/img/${song.albumId}`"
      ></van-image>
    </div>
    <div class="song-info">
      <p>{{ song.songName }}</p>
      <p>{{ albumName }}</p>
    </div>
    <div class="more">
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<script>
import { Image as VanImage, Icon as VanIcon } from 'vant';
import base from '@/api/base';

export default {
  data() {
    return {
      albumName: '',
      base,
    };
  },
  components: {
    VanImage,
    VanIcon,
  },
  props: ['song'],
  beforeMount() {
    this.$api.album.getAlbumNameByAlbumId(this.song.albumId).then((response) => {
      this.albumName = response.data;
    });
  },
  methods: {
    click() {
      this.$eventBus.$emit('getSongItemReply', this.song);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.song-img van-image {
  background-color: #010101;
}
.song-info {
  display: flex;
  flex-direction: column;
  letter-spacing: 0.05rem;
  width: 75%;
  p {
    padding: 0;
    margin: 0;
  }

  p:nth-child(1) {
    color: white;
    font-size: 0.7rem;
  }
  p:nth-child(2) {
    color: rgba($color: white, $alpha: 0.4);
    font-size: 0.6rem;
  }
}
.more {
  color: rgba($color: white, $alpha: 0.4);
  font-size: 1.2rem;
}
</style>
