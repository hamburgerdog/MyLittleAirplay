<template>
  <div>
    <van-swipe
      @change="onChange"
      id="swipe"
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item
        v-for="swipe in Swipes"
        :key="swipe.albumId"
        :style="{
          backgroundImage: `${url}${swipe.albumId}`,
        }"
        @click="goSwipeAlbum(swipe.albumId)"
      ></van-swipe-item>
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
      url: `url(${this.$base.mlaUrl}/album/img/`,
      current: 0,
      indicators: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
      Swipes: [
        {
          albumId: 1,
        },
        {
          albumId: 8,
        },
        {
          albumId: 16,
        },
        {
          albumId: 3,
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goSwipeAlbum(albumId) {
      this.$eventBus.$emit('changeRouter', {
        path: `/album/${albumId}`,
      });
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
  margin-top: 0.6rem;
}

.van-swipe-item {
  color: #fff;
  font-size: 1rem;
  height: 8.5rem;
  border-radius: 0.4rem;
  overflow: hidden;
  text-align: center;
  background-size: cover;
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
</style>
