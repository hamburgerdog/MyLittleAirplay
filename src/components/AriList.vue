<template>
  <div>
    <splice-bar :info="info"></splice-bar>
    <div class="list-box">
      <div>
        <van-image
          width="8rem"
          height="7rem"
          fit="cover"
          radius="0.3rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="list-info">
        <p>20<sup>+</sup></p>
        <p>AIR DAILY</p>
        <p>没有闹钟的假日便是最好的假日</p>
        <p>来自假日编辑Fish</p>
      </div>
      <div class="list-card">
        <van-image
          width="8rem"
          height="7rem"
          fit="cover"
          radius="0.3rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>刷街必备 | 街头最酷的仔BGM</p>
      </div>
      <div class="list-card">
        <van-image
          width="8rem"
          height="7rem"
          fit="cover"
          radius="0.3rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>给打工人：五月请对我好一点</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
import SpliceBar from './SpliceBar.vue';

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
    VanImage,
    SpliceBar,
  },
};
</script>

<style lang="scss" scoped>
.list-head {
  padding: 0;
  margin: 0 {
    top: 0.4rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.5rem;

  span {
    font-size: 1.4rem;
    height: 2rem;
  }

  p span {
    font-size: 0.8rem;
    font-weight: 500;
  }
}

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
  .list-card {
    p {
      padding: 0;
      margin: 0;
      width: 7.2rem;
      color: white;
      font-size: 0.7rem;
    }
  }
}
</style>
