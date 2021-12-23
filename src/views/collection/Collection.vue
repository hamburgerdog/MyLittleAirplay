<template>
  <div class="collection-box animate__animated animate__fadeIn">
    <main-head
      :title="'COLLECTION'"
      class="main-head"
      :firstActive="false"
    ></main-head>
    <search class="main-search"></search>
    <div class="album-show">
      <van-image
        class="albums-image"
        width="95%"
        height="8rem"
        :src="this.image"
        fit="cover"
        lazy-load
        radius="1rem"
        @click="goToAlbumList()"
      />
      <p class="albums-text">喜欢再多留一点</p>
    </div>
    <div class="hr"></div>
    <splice-bar class="bar" :info="info"></splice-bar>
    <div class="songs-list">
      <song-item
        class="song-item"
        v-for="song in songs"
        v-on="$listeners"
        :key="song.songId"
        :song="song"
      ></song-item>
      <div class="tips" v-if="this.songs.length === 0">
        <p>暂无收藏歌曲，快去收藏吧.......</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
import image from '@/assets/mock/albums.webp';

import MainHead from '@/views/main/MainHead.vue';
import Search from '@/components/MySearch.vue';
import SpliceBar from '@/components/SpliceBar.vue';
import SongItem from '@/components/SongItem.vue';

export default {
  data() {
    return {
      info: {
        engText: 'My Collection',
        zhText: '歌曲',
        unshow: true,
      },
      songs: [],
      image,
    };
  },
  components: {
    MainHead,
    Search,
    SpliceBar,
    SongItem,
    VanImage,
  },
  beforeMount() {
    this.$api.song
      .getSongCollection(localStorage.getItem('user-id'))
      .then((response) => {
        this.songs = response.data;
        this.songs.forEach((item) => {
          Object.defineProperty(item, 'isCollected', {
            value: true,
            writable: true,
          });
        });
      });
  },
  methods: {
    goToAlbumList() {
      this.$eventBus.$emit('changeRouter', {
        path: '/albumList',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-box {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > div {
    margin-bottom: 0.6rem;
  }

  .bar {
    margin: 0;
  }

  .album-show {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .albums-image {
    box-shadow: 1rem 1rem 1.5rem #000;
    border: 4px solid #ddd;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .albums-text {
    letter-spacing: 0.1rem;
    color: rgba($color: #eee, $alpha: 0.8);
    padding: 0.4rem 1rem;
    z-index: 2;
    font-weight: 500;
    padding: 0.2rem;
  }
  .hr {
    height: 2px;
    background-color: rgba(128, 128, 128, 0.3);
    box-shadow: 0.2rem -0.3rem 0.4rem #000;
  }

  .songs-list {
    gap: 0.4rem;
    overflow: scroll;
    height: 44vh;

    .title {
      position: sticky;
      top: 0rem;
      background: #1b1b1b;
      z-index: 99;
    }

    .song-item {
      margin-top: 0.5rem;
    }
  }

  .tips {
    padding: 0.4rem;
    color: #666;
    font-size: 0.8rem;
  }
}
</style>
