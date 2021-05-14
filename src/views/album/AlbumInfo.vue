<template>
  <div class="info-box">
    <card class="card" :listCard="card"></card>
    <div class="card-text">
      <p>{{ CardInfoFromParent.cardText }}</p>
      <van-icon name="service" @click="addSongs($event)" />
    </div>
    <p class="card-footer">{{ CardInfoFromParent.cardFooter }}</p>
  </div>
</template>

<script>
import { Icon } from 'vant';
import Card from '../../components/PlayListCard.vue';

export default {
  data() {
    return {
      card: {
        info: '',
        imgUrl: '',
        width: '12rem',
        height: '10rem',
        radius: '1rem',
      },
      canBouce: true,
      added: false,
    };
  },
  components: {
    Card,
    vanIcon: Icon,
  },
  props: ['CardInfoFromParent'],
  methods: {
    addSongs(event) {
      if (!this.added) {
        this.$eventBus.$emit('clickAddAlbumSongs');
        this.added = true;
      }
      this.$global.deBounceAddAnimate(
        event.srcElement,
        'animate__bounce',
        this.canBouce,
        1500,
      );
    },
  },
  mounted() {
    this.$eventBus.$on('getAlbumCoverUrl', (reply) => {
      this.card.imgUrl = reply;
    });
  },
};
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.card {
  padding-top: 1rem;
}

.card-text {
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  cursor: default;
  p {
    width: 80%;
    font-weight: 500;
  }

  i {
    padding-top: 0.3rem;
    font-size: 1.5rem;
    color: #666;
    font-weight: bolder;
  }
}
.card-footer {
  cursor: default;
  padding: 0.5rem 0.5rem;
  color: #666;
  font-size: 0.8rem;
  font-weight: 500;
}
.card-footer:hover {
  color: #ccc;
}
</style>
