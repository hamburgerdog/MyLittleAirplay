<template>
  <div class="random-play">
    <div class="image">
      <div>
        <van-image
          width="3.5rem"
          height="3.5rem"
          radius="0.5rem"
          fit="cover"
          :src="randomImage1"
        />
      </div>
      <div>
        <van-image
          width="3.8rem"
          height="3.8rem"
          radius="0.8rem"
          fit="cover"
          :src="randomImage2"
        />
      </div>
      <div>
        <van-image
          width="3.5rem"
          height="3.5rem"
          radius="0.5rem"
          fit="cover"
          :src="randomImage3"
        />
      </div>
    </div>
    <div class="left-play-box">
      <div class="play-text">
        <h3>AIR Radio</h3>
        <p>随机心情推荐</p>
      </div>
      <van-icon class="play-box" name="play-circle" />
    </div>
  </div>
</template>

<script>
import { Image as VanImage, Icon as VanIcon } from 'vant';

export default {
  components: {
    VanImage,
    VanIcon,
  },
  data() {
    return {
      randomImage1: `${this.GLOBAL.BASE_URL}/album/img/4`,
      randomImage2: `${this.GLOBAL.BASE_URL}/album/img/6`,
      randomImage3: `${this.GLOBAL.BASE_URL}/album/img/5`,
    };
  },
};
</script>

<style lang="scss" scoped>
.random-play {
  display: flex;
  align-items: flex-end;
}

.image {
  display: flex;
  height: 4.4rem;
  align-items: flex-end;

  div {
    height: 3.5rem;
    z-index: 2;
  }

  div:nth-child(2) {
    position: absolute;
    height: 4rem;
    left: 2.5rem;
    z-index: 3;

    .van-image {
      border: 0.1rem solid white;
    }
  }
  div:nth-child(3) {
    background-color: #010101;
  }
}

.left-play-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  background-color: #010101;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  width: 100%;

  .play-text {
    display: flex;
    flex-direction: column;
    width: 5rem;
    height: 4rem;
    text-align: justify;
    text-align-last: justify;
    justify-content: center;

    h3 {
      padding: 0;
      margin: 0;
      color: white;
      font-size: 1rem;
      font-weight: bolder;
    }
    p {
      padding: 0;
      margin: 0;
      color: rgba($color: white, $alpha: 0.4);
      font-size: 0.7rem;
      font-weight: 200;
    }
  }

  .play-box {
    font-size: 2.5rem;
    color: yellow;
    margin-left: 1rem;
  }
}
</style>
