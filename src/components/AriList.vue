<template>
  <div>
    <splice-bar :info="info"></splice-bar>
    <div class="list-box">
      <play-list-card :listCard="{ info: '' }"></play-list-card>
      <div class="list-info">
        <p>20<sup>+</sup></p>
        <p>AIR DAILY</p>
        <p>没有闹钟的假日便是最好的假日</p>
        <p>来自假日编辑Fish</p>
      </div>
      <play-list-card
        :listCard="{ info: '刷街必备 | 街头最酷的仔BGM' }"
      ></play-list-card>
      <play-list-card
        :listCard="{ info: '给打工人：五月请对我好一点' }"
      ></play-list-card>
    </div>
  </div>
</template>

<script>
import SpliceBar from './SpliceBar.vue';
import PlayListCard from './PlayListCard.vue';

export default {
  data() {
    return {
      info: {
        engText: 'ARI Playlist',
        zhText: '专辑',
      },
    };
  },
  components: {
    SpliceBar,
    PlayListCard,
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
    height: 7rem;

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
