<template>
  <div class="song-box" @click="click">
    <div class="song-img">
      <van-image
        width="2.2rem"
        height="2.2rem"
        radius=".4rem"
        fit="cover"
        lazy-load
        :src="`/image/album${song.albumId}.webp`"
        @error="imgError"
      ></van-image>
    </div>
    <div class="song-info">
      <p>{{ song.songName }}</p>
      <p>{{ albumName }}</p>
    </div>
    <div class="more">
      <van-icon ref="icon" name="like" @click.stop="like($event)" />
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
    this.$api.album
      .getAlbumNameByAlbumId(this.song.albumId)
      .then((response) => {
        this.albumName = response.data;
      });
  },
  updated() {
    if (this.song.isCollected) {
      this.$refs.icon.style.color = 'palevioletred';
    }
  },
  methods: {
    imgError(err) {
      this.$throw(err);
    },
    click() {
      this.$eventBus.$emit('getSongItemReply', this.song);
    },
    like() {
      if (this.song.isCollected) {
        this.$api.song
          .removeSongFromCollection(
            localStorage.getItem('user-id'),
            this.song.songId,
          )
          .then(() => {
            this.song.isCollected = false;
            this.$global.songCollection.delete(this.song.songId);
            this.$refs.icon.style.color = '';
          });
      } else {
        this.$api.song
          .addSongToCollection(
            localStorage.getItem('user-id'),
            this.song.songId,
          )
          .then(() => {
            this.song.isCollected = true;
            this.$global.songCollection.add(this.song.songId);
            this.$refs.icon.style.color = 'palevioletred';
          });
      }
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
