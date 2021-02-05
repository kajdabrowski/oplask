<template>
    <div class="img-gallery" >
      <div class="gallery-container" v-for="(item) in imgList" :key="item.id">
        <img @click="imgNav(item)" :src="item.urls.small" :alt="item.alt_description" />
        <button @click="like(item)" class="heart" :class="{ liked:liked.find(element => element.id === item.id)}"></button>
      </div>
    </div>
</template>

<script>
export default {
  data() { 
    return {
      liked: [],
  }},
  methods: {
    like(item) {
      !this.liked.find(element => element.id === item.id) ? this.liked.push(item) : this.liked = this.liked.filter(e => e.id != item.id)
      localStorage.setItem('liked', JSON.stringify(this.liked))
    },
    imgNav(item) {
      this.$router.push("SingleImg/" + item.id)
    }
  },
  created() {
    if (localStorage.getItem("liked")) {
      this.liked = JSON.parse(localStorage.getItem("liked"))
    }
  },
  props: {
    imgList: Array,
  },
}
</script>

<style lang="scss">



</style>