<template>
  <div>
    <div @click="goToAlbumList">
      <splice-bar :info="info"></splice-bar>
    </div>
    <div class="list-box">
      <play-list-card :listCard="listCard1"></play-list-card>
      <div class="list-info">
        <p>20<sup>+</sup></p>
        <p>AIR DAILY</p>
        <p>睇不到谁都好,亦在风雨中赶路.在地上画满记号,有天可再拥抱</p>
        <p></p>
      </div>
      <play-list-card :listCard="listCard2"></play-list-card>
      <play-list-card :listCard="listCard3"></play-list-card>
    </div>
  </div>
</template>

<script>
import SpliceBar from '../../components/SpliceBar.vue';
import PlayListCard from '../../components/PlayListCard.vue';

export default {
  data() {
    return {
      info: {
        engText: 'AIR Playlist',
        zhText: '专辑',
      },
      listCard1: {
        info: '',
        imgUrl: `${this.GLOBAL.BASE_URL}/album/img/7`,
        albumId: 7,
        width: '8rem',
        height: '7rem',
        radius: '0.3rem',
      },
      listCard2: {
        info: '總在一星期 有一天真的不想返工',
        imgUrl: `${this.GLOBAL.BASE_URL}/album/img/11`,
        albumId: 11,
        width: '8rem',
        height: '7rem',
        radius: '0.3rem',
      },
      listCard3: {
        info: '在动物园散步才是正经事',
        imgUrl: `${this.GLOBAL.BASE_URL}/album/img/9`,
        albumId: 9,
        width: '8rem',
        height: '7rem',
        radius: '0.3rem',
      },
    };
  },
  components: {
    SpliceBar,
    PlayListCard,
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
.list-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-top: 0.2rem;
  }

  .list-info {
    width: 8rem;
    height: 7.8rem;

    p {
      padding: 0;
      margin: 0;
    }

    p:nth-child(1) {
      color: white;
      width: 4rem;
      font-size: 2rem;
      font-weight: 200;
    }

    p:nth-child(2) {
      margin-bottom: 0.5rem;
      background-color: red;
      text-align: justify;
      text-align-last: justify;
      width: 6rem;
      font-weight: 800;
      font-size: 1.2rem;
    }

    p:nth-child(3),
    p:nth-child(4) {
      color: rgba($color: white, $alpha: 0.4);
      font-size: 0.7rem;
      line-height: 0.8rem;
      letter-spacing: 0.01rem;
    }
  }
}
</style>
