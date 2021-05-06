<template>
  <div class="header">
    <van-icon name="arrow-left" @click="changeRoute" />
    <nobr>{{ HeaderFromParent.text }}</nobr>
    <div class="head-right-icon">
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
  methods: {
    changeRoute() {
      this.$router.go(-1);
    },
  },
  props: ['HeaderFromParent'],
};
</script>

<style lang="scss" scoped>
i:hover {
  color: #666;
}

.header {
  padding: 1rem;
  width: 90%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 1.5rem;
  font-size: 1.2rem;

  nobr {
    font-size: 0.7rem;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65%;
  }

  .head-right-icon {
    display: flex;
    flex-direction: row;

    i {
      margin-left: 0.5rem;
    }
  }
}
</style>
