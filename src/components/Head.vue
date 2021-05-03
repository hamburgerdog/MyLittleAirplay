<template>
  <div class="head">
    <h2>DISCOVER</h2>
    <van-image
      id="face"
      round
      fit="cover"
      width="2.2rem"
      height="2.2rem"
      :src="faceImg"
    />
  </div>
</template>

<script>
import { Image } from 'vant';
import faceImg from '../assets/mock/1.jpg';

export default {
  data() {
    return {
      faceImg,
    };
  },
  components: {
    'van-image': Image,
  },
};
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: white;
  }
}
</style>
