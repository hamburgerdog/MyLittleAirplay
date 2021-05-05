<template>
  <search class="search"></search>
</template>

<script>
import { Search } from 'vant';

export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  background: #1a1a1a;
  padding: 0;

  div:nth-child(1) {
    border-radius: 1.5rem;
    background-color: #010101;
    color: yellow;
  }
}
</style>
