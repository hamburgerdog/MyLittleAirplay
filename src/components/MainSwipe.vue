<template>
  <div>
    <van-swipe
      @change="onChange"
      id="swipe"
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="indicators">
      <div
        v-for="item in indicators"
        :key="item.id"
        :class="current === item.id ? 'active-indicator' : 'custom-indicator'"
      ></div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  data() {
    return {
      current: 0,
      indicators: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
  },
};
</script>

<style lang='scss' scoped>
.my-swipe {
  border-radius: 0.8rem;
}

.van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 7.5rem;
  text-align: center;
  background-color: #2f3031;
}

.indicators {
  position: relative;
  top: -7rem;
  left: 13rem;
  display: flex;
  width: 3rem;
  justify-content: space-around;
  align-items: center;
  background: none;
  div {
    border-radius: 50%;
    right: 1rem;
    top: 1rem;
    width: 0.4rem;
    height: 0.4rem;
    background-color: rgba($color: #fff, $alpha: 0.3);
  }
}

.active-indicator {
  width: 0.6rem !important;
  height: 0.6rem !important;
  background-color: rgba($color: #010101, $alpha: 0.2) !important;
}

.swipe-enter,
.swipe-leave-to {
  transform: translateX(5rem);
  opacity: 0;
}

.swipe-enter-active,
.swipe-leave-active {
  transition: all 0.5s ease-out;
}
</style>
