<template>
  <div class="list-card" @click="goToAlbum(listCard.albumId)">
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
  components: {
    VanImage,
  },
  methods: {
    goToAlbum(albumId) {
      this.$eventBus.$emit('changeRouter', {
        path: `/album/${albumId}`,
      });
    },
  },
  props: ['listCard'],
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
