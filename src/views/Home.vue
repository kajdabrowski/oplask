<template>
  <div class="grid-container">
    <SEARCH v-show="data.length > 0" class="search" @change="searchQuery" @click="random" />
    <a v-show="haveSearched" class="button left" @click="previousPage"> ← </a>
    <p v-show="haveSearched" class="page">Page: {{ page }}</p>
    <GALLERY v-if="data.length > 0" class="gallery" :imgList="data" />
    <div class="gallery" v-else><p>loading</p></div>
    <a v-show="haveSearched" class="button right" @click="nextPage"> → </a>
    <router-link v-show="data.length > 0" class="button router" to="/Liked"
      >Go to liked images</router-link
    >
  </div>
</template>

<script>
import SEARCH from "@/components/Search.vue";
import GALLERY from "@/components/Gallery.vue";

export default {
  components: {
    GALLERY,
    SEARCH,
  },
  data() {
    return {
      search: "",
      page: 1,
      haveSearched: false,
    };
  },
  methods: {
    searchQuery(search) {
      this.search = search;
      this.haveSearched = true;
    },
    random() {
      this.haveSearched = false;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.$store.dispatch('search', {'search': this.search, 'page': this.page})
      }
    },
    nextPage() {
      this.page++;
      this.$store.dispatch('search', {'search': this.search, 'page': this.page})
    },
  },
  computed: {
    data() {
      return this.$store.getters.getAllImg
    },
  }
};
</script>

<style lang="scss">
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 25vh auto auto 25vh;
  align-items: center;
  justify-content: center;
  > .search {
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: center;
    align-self: flex-start;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  > .left {
    grid-row: 3/4;
    grid-column: 1/2;
    justify-self: center;
  }
  > .gallery {
    grid-row: 3/4;
    grid-column: 2/3;
  }
  > .right {
    grid-row: 3/4;
    grid-column: 3/4;
    justify-self: center;
  }
  > .router {
    grid-row: 4/5;
    grid-column: 1/4;
    justify-self: center;
    align-self: flex-end;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  > .page {
    grid-row: 2/3;
    grid-column: 1/4;
  }
}

@media screen and (max-width: 992px) {
  .grid-container {
    height: 100vh;
  }
}
</style>