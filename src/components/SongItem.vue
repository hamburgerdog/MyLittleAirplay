<template>
  <div class="song-box">
    <div class="song-img">
      <van-image
        width="2.2rem"
        height="2.2rem"
        radius=".4rem"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      ></van-image>
    </div>
    <div class="song-info">
      <p>刻在我心底的名字</p>
      <p>蔡依林/田馥甄</p>
    </div>
    <div class="more">
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<script>
import { Image as VanImage, Icon as VanIcon } from 'vant';

export default {
  components: {
    VanImage,
    VanIcon,
  },
};
</script>

<style lang="scss" scoped>
.song-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.song-img van-image {
  background-color: #010101;
}
.song-info {
  display: flex;
  flex-direction: column;
  letter-spacing: .05rem;
  width: 75%;
  p {
    padding: 0;
    margin: 0;
  }

  p:nth-child(1) {
    color: white;
    font-size: 0.8rem;
  }
  p:nth-child(2) {
    color: rgba($color: white, $alpha: 0.4);
    font-size: 0.6rem;
  }
}
.more{
    color: rgba($color: white, $alpha: .4);
    font-size: 1.2rem;
}
</style>
