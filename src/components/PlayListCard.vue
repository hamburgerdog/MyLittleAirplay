<template>
  <div class="list-card" @click="goToAlbum($event,listCard.albumId)">
    <van-image
      class="image"
      :width="listCard.width"
      :height="listCard.height"
      :radius="listCard.radius"
      fit="cover"
      :src="listCard.imgUrl"
    />
    <p>{{ listCard.info }}</p>
    <!-- 刷街必备 | 街头最酷的仔BGM -->
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';

export default {
  data() {
    return {
      canPulse: true,
    };
  },
  props: ['listCard'],
  components: {
    VanImage,
  },
  methods: {
    goToAlbum(event, albumId) {
      if (albumId === undefined) {
        this.$global.deBounceAddAnimate(
          event.srcElement.parentElement,
          'animate__rubberBand',
          this.canPulse,
          2000,
        );
        return;
      }
      this.$eventBus.$emit('changeRouter', {
        path: `/album/${albumId}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-card {
  p {
    padding: 0;
    margin: 0;
    width: 7.2rem;
    color: white;
    font-size: 0.7rem;
  }
}
</style>
