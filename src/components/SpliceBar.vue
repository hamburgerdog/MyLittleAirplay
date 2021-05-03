<template>
  <div class="list-head">
    <p>
      <span>{{ info.engText }}</span
      >_{{ info.zhText }}
    </p>
    <span>›</span>
  </div>
</template>

<script>
export default {
  props: ['info'],
};
</script>

<style lang='scss' scoped>
.list-head {
  padding: 0;
  margin: 0 {
    top: 0.4rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.5rem;

  span {
    font-size: 1.4rem;
    height: 2rem;
  }

  p span {
    font-size: 0.8rem;
    font-weight: 500;
  }
}
</style>
