<template>
  <div
    class="my-search"
    @mouseenter="inSearch"
    @mouseleave="searchCancel"
    ref="eMySearch"
  >
    <search
      class="search"
      :error="true"
      v-model="search"
      @keyup="toSearchWithTHORTTLE"
      @search="toSearch"
      :clearable="true"
    ></search>
    <div class="search-info">
      <p
        @click="changeSong(info)"
        v-for="info in searchInfos"
        :key="info.songId"
      >
        {{ info.songName }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Search } from 'vant';

//  搜索框防抖
function debounce(fn, delay = 500) {
  let timeout;
  // eslint-disable-next-line
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(this, event);
    }, delay);
  };
}

//  搜索歌曲功能
function searchSong() {
  //  防止空字符串搜索
  if (!this.canSearch) return;
  axios
    .get(`${this.GLOBAL.BASE_URL}/song/name/${this.search}`)
    .then((response) => {
      this.searchInfos = response.data;
      if (this.searchInfos.length === 0) {
        this.searchInfos.push({
          songId: 0,
          songName: '找不到歌曲请重新搜索',
        });
      }
    });
}

export default {
  data() {
    return {
      searchInfos: [],
      search: '',
      enterClassName: ' my-search-enter',
    };
  },
  watch: {
    // eslint-disable-next-line
    search: debounce(function (newValue) {
      if (newValue === '') {
        this.searchInfos = this.searchInfos.slice(0, 0);
      }
    }, 300),
  },
  created() {
    // 添加节流方法
    this.toSearchWithTHORTTLE = this.GLOBAL.THORTTLE(this.searchSong, 1000);
  },
  components: {
    Search,
  },
  methods: {
    inSearch() {
      this.$refs.eMySearch.className += this.enterClassName;
    },
    canSearch() {
      return this.search !== '';
    },
    searchSong,
    //  添加防抖方法
    // eslint-disable-next-line
    toSearch: debounce(searchSong, 1000),
    searchCancel() {
      this.$refs.eMySearch.className = this.$refs.eMySearch.className.slice(
        0,
        // eslint-disable-next-line
        -this.enterClassName.length
      );
      this.searchInfos = [];
    },
    changeSong(song) {
      this.$eventBus.$emit('getSongItemReply', song);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-search {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.search {
  width: 100%;
  background: #1a1a1a;
  padding: 0;
  z-index: 1;

  // 搜索图标
  div:nth-child(1) {
    border-radius: 1.5rem;
    background-color: #010101;
    color: yellow;
  }
}
.search-info {
  display: none;

  padding: 1.3rem 4%;
  position: relative;
  top: -1.2rem;
  height: 6rem;
  width: 92%;
  overflow-y: scroll;
  border-radius: 1.5rem;
  background-color: #010101;

  color: white;
  font-size: 1rem;

  p {
    padding: 0.2rem;
    border-bottom: 2px solid #1a1a1a;
    overflow-x: hidden;
    overflow-y: scroll;
    text-overflow: ellipsis;
  }
}

.my-search-enter {
  .search {
    div:nth-child(1) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-top: 0.4rem;
      padding-left: 0.5rem;
    }
  }
  .search-info {
    display: block;
  }
}
</style>
