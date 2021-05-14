<template>
  <div class="random-play">
    <div class="image">
      <div @click="bounce">
        <van-image
          width="3.5rem"
          height="3.5rem"
          radius="0.5rem"
          fit="cover"
          :src="randomImage1"
        />
      </div>
      <div @click="bounce">
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
      <div class="play-text" @click="flip">
        <h3>AIR Radio</h3>
        <p>随机心情推荐</p>
      </div>
      <van-icon class="play-box" name="play-circle" @click="click" />
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
      randomImage1: `${this.$base.mlaUrl}/album/img/4`,
      randomImage2: `${this.$base.mlaUrl}/album/img/6`,
      randomImage3: `${this.$base.mlaUrl}/album/img/5`,
      canBouce: true, //  用于防抖
      canJello: true,
      canFlip: true,
    };
  },
  methods: {
    click(e) {
      this.$api.song.getRandomSongsWithLimit(1).then((resp) => {
        this.$eventBus.$emit('getRandomSong', resp.data[0]);
      });
      this.jello(e);
    },
    addAnimateClass(element, animateName, delay = 3000) {
      element.classList.add('animate__animated');
      element.classList.add(animateName);
      setTimeout(() => {
        element.classList.remove(animateName);
      }, delay);
    },
    debounce(fn, canRun, delay = 2000) {
      if (!canRun) return;
      // eslint-disable-next-line
      canRun = false;
      fn();
      setTimeout(() => {
        // eslint-disable-next-line
        canRun = true;
      }, delay);
    },
    bounce(event) {
      this.debounce(() => {
        this.addAnimateClass(event.srcElement, 'animate__bounce');
      }, this.canBouce);
    },
    jello(event) {
      this.debounce(
        () => {
          this.addAnimateClass(event.srcElement, 'animate__jello');
        },
        this.canJello,
        500,
      );
    },
    flip(event) {
      this.debounce(
        () => {
          this.addAnimateClass(event.srcElement.parentElement, 'animate__flip');
        },
        this.canFlip,
        1000,
      );
    },
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
    cursor: default;

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
