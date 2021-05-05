<template>
  <div>
    <album-head :HeaderFromParent="Header"></album-head>
    <div class="app">
      <search class="search"></search>
      <info :CardInfoFromParent="CardInfo"></info>
      <album-songs></album-songs>
    </div>
  </div>
</template>

<script>
import AlbumHead from '../../components/RouterBackHead.vue';
import Search from '../../components/MySearch.vue';
import Info from './AlbumInfo.vue';
import AlbumSongs from './AlbumSongsList.vue';

export default {
  data() {
    return {
      CardInfo: {
        cardText: '如果不出远门，长假期间适合补一补的超长老番',
        imgUrl: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        cardFooter:
          '基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。',
      },
      AlbumInfo: {
        albumId: 0,
        albumName: '',
        albumCoverUrl: '',
      },
      Header: {
        text: '如果不出远门，长假期间适合补一补的超长老番',
      },
    };
  },
  components: {
    AlbumHead,
    Search,
    Info,
    AlbumSongs,
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
</style>
