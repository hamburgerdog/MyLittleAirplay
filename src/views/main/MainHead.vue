<template>
  <div class="head">
    <div class="head-title">
      <h2>{{ title }}</h2>
      <div class="nav-dot">
        <div :class="this.firstActive ? 'active' : ''"></div>
        <div :class="!this.firstActive ? 'active' : ''"></div>
      </div>
    </div>
    <van-image
      id="face"
      round
      fit="cover"
      width="2.2rem"
      height="2.2rem"
      :src="faceImg"
      @click="changePage()"
    />
  </div>
</template>

<script>
import { Image } from 'vant';
import faceImg from '../../assets/mock/1.jpg';

export default {
  data() {
    return {
      faceImg,
    };
  },
  components: {
    'van-image': Image,
  },
  methods: {
    changePage() {
      if (this.$route.path !== '/collection') {
        this.$eventBus.$emit('changeRouter', {
          path: '/collection',
        });
      } else {
        this.$eventBus.$emit('changeRouter', {
          path: '/home',
        });
      }
    },
  },
  props: ['title', 'firstActive'],
};
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;

  .head-title {
    display: flex;
    flex-direction: column;

    h2 {
      color: white;
      line-height: 1.6;
    }

    .nav-dot {
      display: flex;

      > div {
        width: 0.8rem;
        height: 0.4rem;
        border-radius: 1rem;
        background-color: #fff;
        margin-right: 0.6rem;
      }

      .active {
        width: 1.4rem;
        background-color: yellow;
      }
    }
  }
}
</style>
