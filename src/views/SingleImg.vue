<template>
  <div class="singleImg">
    <nav>
      <a class="button" @click="previous"> ← </a>
      <router-link class="button" to="/">Tillbaka</router-link>
      <a class="button" @click="next"> → </a>
    </nav>
    <img :src="img.urls.full" :alt="img.alt_description" />
    <WRITEMETADATA class="meta-data" :imgData="img"/>
  </div>
</template>

<script>
import WRITEMETADATA from "@/components/WriteMetaData.vue"

export default {

  components: {
    WRITEMETADATA
  },

  data() {
    return {
      img: this.$root.getSingleImg(this.$route.params.id),
      counter: this.$root.getAllImg().indexOf(this.$root.getSingleImg(this.$route.params.id)),
    }
  },
  methods: {
    next() {
      this.counter > 8 ? (this.counter = 0) : this.counter++
      this.img = this.$root.getImgIndex(this.counter)
    },
    previous() {
      console.log("<")
      this.counter < 1 ? (this.counter = 8) : this.counter--
      this.img = this.$root.getImgIndex(this.counter)
      
    },
  },
}
</script>

<style lang="scss">

.singleImg {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;

  nav {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
    img {
    max-width: 100%;
    max-height: 70%;
  }
}
</style>