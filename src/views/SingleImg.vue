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
  data() { return {
    counter: this.$store.getters.getAllImg.indexOf(this.$store.getters.getSingleImg(this.$route.params.id)),
    img: this.$store.getters.getSingleImg(this.$route.params.id)
  }},
  methods: {
    next() {
      this.counter > 8 ? (this.counter = 0) : this.counter++
      this.img = this.$store.getters.getImgIndex(this.counter)
    },
    previous() {
      console.log("<")
      this.counter < 1 ? (this.counter = 8) : this.counter--
      this.img = this.$store.getters.getImgIndex(this.counter)
    },
  }
  /*,
  created() {
    if (this.$store.getters.getSingleImg(this.$route.params.id)) {
      this.$router.push('/')
    }
  }
  */
}
</script>

<style lang="scss">

.singleImg {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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