<template>
  <div class="header">
    <van-icon name="arrow-left" />
    <p>{{ headtext }}</p>
    <div class="head-icon">
      <van-icon name="share" />
      <van-icon name="weapp-nav" />
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
  components: {
    vanIcon: Icon,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0rem 5%;
  width: 90%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;

  .head-icon {
    display: flex;
    flex-direction: row;
  }
}
</style>