<template>
  <div>
    <music-player
      class="mPlayer"
      :audio="audio"
      :lrcType="3"
      :fixed="true"
      :mini="false"
      ref="aplayer"
    ></music-player>
  </div>
</template>

<script>
import { APlayer as MusicPlayer } from '@moefe/vue-aplayer';

export default {
  data() {
    return {
      audio: this.parentAudio,
    };
  },
  updated() {
    this.$refs.aplayer.switch(this.audio.length);
  },
  props: ['parentAudio'],
  components: {
    MusicPlayer,
  },
};
</script>
<style lang="scss" scoped>
</style>
