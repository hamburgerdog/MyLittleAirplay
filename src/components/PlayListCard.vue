<template>
  <div class="list-card">
    <van-image
      width="8rem"
      height="7rem"
      fit="cover"
      radius="0.3rem"
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
